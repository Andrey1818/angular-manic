import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatNativeDateModule} from "@angular/material/core";
import {MatCardModule} from "@angular/material/card";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatStepperModule} from "@angular/material/stepper";

@NgModule({

  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatNativeDateModule,
    MatStepperModule,
  ],
  exports: [
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatNativeDateModule,
    MatCardModule,
    MatDatepickerModule,
    MatStepperModule,
  ]
})

export class MatModule {

}
