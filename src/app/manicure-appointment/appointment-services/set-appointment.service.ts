import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Appoint, Time, Person} from "../../shared/app.interfaces";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SetAppointmentService {

  constructor(
    private http: HttpClient,
  ) {
  }

  setData(person: Person, time: Time): Observable<any> {
    const appoint: Appoint = {
      ...person,
      ...time
    }
    this.http.post(`${environment.fbDbUrlAdmin}/appointments.json`, appoint).subscribe()
    return this.http.post(`${environment.fbDbUrl}/appointments.json`, appoint)
  }
}
