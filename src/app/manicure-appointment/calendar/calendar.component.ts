import {Component, forwardRef, OnDestroy, OnInit, Provider} from '@angular/core';
import {GetDateAppointmentService} from "../appointment-services/get-date-appointment.service";
import {CheckedDate, CompleteDate, Time} from "../../shared/app.interfaces";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

const VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CalendarComponent),
  multi: true
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [VALUE_ACCESSOR]
})
export class CalendarComponent implements OnInit, OnDestroy, ControlValueAccessor {

  dates: Array<Array<CheckedDate>> = []
  part: number = 0
  visibilityIndex: number
  choseDate: number
  time: Time | undefined

  constructor(
    private getDateAppointService: GetDateAppointmentService,
  ) {
  }

  ngOnInit(): void {
    this.getDateAppointService.getCheckedDate().subscribe(response => this.editRespDates(response))
  }

  editRespDates(dates: Array<CheckedDate>) {
    let appointDatesFirst = dates.splice(6)
    let appointDatesSecond = appointDatesFirst.splice(6)
    let appointDatesThird = appointDatesSecond.splice(6)
    let appointDatesFourth = appointDatesThird.splice(6)
    let appointDatesFifth = appointDatesFourth.splice(6)

    this.dates.push(dates, appointDatesFirst, appointDatesSecond, appointDatesThird, appointDatesFourth, appointDatesFifth)
  }

  changePart(incOrDecr: string) {
    if (incOrDecr === 'change+') {
      if (this.dates[this.part + 1].length) {
        this.time = undefined
        this.onChange(this.time)
        this.visibilityIndex = -1
        this.part++
      } else return;
    } else {
      if (this.part) {
        this.time = undefined
        this.onChange(this.time)
        this.visibilityIndex = -1
        this.part--
      } else return;
    }
  }

  setChoseDate(date: CompleteDate) {
    if (date.busy) {
      return
    }
    this.time = undefined
    this.onChange(this.time)
    this.choseDate = date.date.getTime()
  }

  setVisibilityIndex(index: number, date: CompleteDate) {
    if (date.busy) {
      return
    }
    this.visibilityIndex = index
  }

  setTime(date: number, hour: number) {
    const dateAndHour = new Date(date).setHours(hour)
    this.time = {
      date,
      dateAndHour
    }
    this.onChange(this.time)
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
  }

  ngOnDestroy() {
    this.time = undefined
    this.getDateAppointService.deleteNotActualDates()
  }

  private onChange = (value: any) => {
  }

}
