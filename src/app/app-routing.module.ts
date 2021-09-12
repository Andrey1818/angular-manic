import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from "./shared/components/main-page/main-page.component";
import {MainInformationComponent} from "./main-information/shared/component/main-information.component";
import {PriceComponent} from "./price/price.component";
import {ManicureAppointmentComponent} from "./manicure-appointment/manicure-appointment.component";
import {ActionsComponent} from "./actions/actions.component";

const routes: Routes = [
  {
    path: '', component: MainPageComponent, children: [
      {path: '', redirectTo: '/main', pathMatch: 'full'},
      {path: 'main', component: MainInformationComponent},
      {path: 'price', component: PriceComponent},
      {path: 'manicure-appointment', component: ManicureAppointmentComponent},
      {path: 'actions', component: ActionsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
