import {Component} from '@angular/core';
import {SetAppointmentService} from "./appointment-services/set-appointment.service";
import {Router} from "@angular/router";
import {Person, Time} from "../shared/app.interfaces";

@Component({
  selector: 'app-manicure-appointment',
  templateUrl: './manicure-appointment.component.html',
  styleUrls: ['./manicure-appointment.component.scss']
})
export class ManicureAppointmentComponent {
  person: Person | undefined;
  time: Time | undefined
  disableButton = false

  constructor(
    private setAppointService: SetAppointmentService,
    private router: Router,
  ) {
  }

  setData() {
    console.log(this.time, this.person)
    if (
      this.time
      && this.person
      && !this.disableButton
    ) {
      this.disableButton = true
      this.setAppointService.setData(this.person, this.time)
        .subscribe(() => {
            this.person = undefined
            this.time = undefined
            this.router.navigate(['/main'])
          }, err => {
            console.log(err)
            this.disableButton = false
          },
          () => {
            this.disableButton = false
          })
    } else {
      console.log('no')
      return
    }
  }
}
