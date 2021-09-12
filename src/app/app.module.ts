import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ServiceWorkerModule} from '@angular/service-worker';
import {HttpClientModule} from "@angular/common/http";

import {MatModule} from "./shared/mat.module";
import {SharedModule} from "./shared/shared.module";
import {AppRoutingModule} from './app-routing.module';

import {AppointmentModule} from "./manicure-appointment/appointment.module";
import {MainInfoModule} from "./main-information/shared/main-info.module";

import {AppComponent} from './app.component';
import {MainPageComponent} from './shared/components/main-page/main-page.component';
import {PriceComponent} from './price/price.component';
import {ActionsComponent} from './actions/actions.component';

import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PriceComponent,
    ActionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatModule,
    MainInfoModule,
    HttpClientModule,
    AppointmentModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
