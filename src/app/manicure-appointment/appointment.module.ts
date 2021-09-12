import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {IConfig, NgxMaskModule} from "ngx-mask";

import {MatModule} from "../shared/mat.module";

import {ManicureAppointmentComponent} from "./manicure-appointment.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {FormComponent} from './form/form.component';

import {DateBlockDirective} from './calendar/directive&service-for/date-block.directive';
import {TimeBlockDirective} from './calendar/directive&service-for/time-block.directive';

import {DateRefactorPipe} from "./calendar/pipes/date-refactor.pipe";
import {ReturnTimesPipe} from "./calendar/pipes/return-times.pipe";

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    ManicureAppointmentComponent,
    CalendarComponent,
    DateBlockDirective,
    TimeBlockDirective,
    FormComponent,
    DateRefactorPipe,
    ReturnTimesPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatModule,
    NgxMaskModule.forRoot(),
  ]
})

export class AppointmentModule {
}
