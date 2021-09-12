import {Injectable} from "@angular/core";
import {Appoint, CheckedDate, noCheckedDate, Time} from "../../shared/app.interfaces";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {Observable, Subject, Subscription} from "rxjs";

@Injectable({providedIn: 'root'})

export class GetDateAppointmentService {

  // hours: Array<number> = [8, 11, 14, 17]
  checkedDates: Subject<Array<noCheckedDate>>

  constructor(
    private http: HttpClient
  ) {
  }

  noCheckedDates(): Array<noCheckedDate> {
    const arrDate: Array<noCheckedDate> = []

    let thisMounts = new Date().getMonth()
    let thisDay = new Date().getDate()

    for (let day = 1; day <= 31; day++) {
      thisDay = ++thisDay
      let newDate: Date = new Date(new Date().getFullYear(), thisMounts, thisDay)
      arrDate.push({
        date: newDate.getTime(),
        times: [newDate.setHours(8), newDate.setHours(11), newDate.setHours(14), newDate.setHours(17)],
      })
      if (newDate.getMonth() !== thisMounts
        && newDate.getDate() === new Date().getDate()) {
        break
      }
    }
    return arrDate
  }

  getAppoint(): Observable<Appoint[]> {
    return this.http.get<Appoint>(`${environment.fbDbUrl}/appointments.json`).pipe(
      map((response: { [key: string]: any }) => {
        return Object
          .keys(response)
          .map(key => (<Appoint>({
            ...response[key],
            id: key
          })))
      })
    )
  }

  getCheckedDate(): Subject<Array<CheckedDate>> {
    const checkedDatesArr: Array<CheckedDate> = []
    const noCheckedDatesArr: Array<noCheckedDate> = this.noCheckedDates()
    const getStream$:Subscription = this.getAppoint().subscribe(response => {
      const appointTimes: Array<Time> = response.map(data => {
        return ({
          date: data.date,
          dateAndHour: data.dateAndHour
        })
      })
      for (let date of noCheckedDatesArr) {
        for (let appointTime of appointTimes) {
          if (date.times.includes(appointTime.dateAndHour)) {
            date.times.splice(date.times.indexOf(appointTime.dateAndHour), 1)
          }
        }
        if(date.times.length){
          checkedDatesArr.push({
            ...date
          })
        }else {
          checkedDatesArr.push({
            ...date,
            busy: true
          })
        }
      }
      this.checkedDates.next(checkedDatesArr)
    }, error => {
      if(!checkedDatesArr.length){
        this.checkedDates.next(noCheckedDatesArr)
      }else {
        console.log(error)
      }
    }, () => getStream$.unsubscribe())

    this.checkedDates = new Subject<Array<CheckedDate|noCheckedDate>>()
    return this.checkedDates
  }

  deleteNotActualDates () {
    const thisDate = new Date().setHours(0, 0, 0, 0)
    this.getAppoint().subscribe(response => {
      for(let appoint of response){
        if(appoint.date < thisDate){
          this.http.delete(`${environment.fbDbUrl}/appointments/${appoint.id}.json`).subscribe()
        }
      }
    })
  }
}
