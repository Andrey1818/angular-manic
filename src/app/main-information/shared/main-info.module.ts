import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {SharedModule} from "../../shared/shared.module";

import {MainInformationComponent} from "./component/main-information.component";
import {MainInformationSelfComponent} from "../main-information-self/main-information-self.component";
import {MainInformationSafenessComponent} from "../main-information-safeness/main-information-safeness.component";
import {MainGalleryComponent} from "../main-gallery/main-gallery.component";
import {MainContactsComponent} from "../main-contacts/main-contacts.component";

@NgModule({
  declarations: [
    MainInformationComponent,
    MainInformationSelfComponent,
    MainInformationSafenessComponent,
    MainGalleryComponent,
    MainContactsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: []
})

export class MainInfoModule {

}
