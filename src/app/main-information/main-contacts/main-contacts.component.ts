import {Component} from '@angular/core';
import {IconsService} from "../../shared/services/icons.service";

@Component({
  selector: 'app-main-contacts',
  templateUrl: './main-contacts.component.html',
  styleUrls: ['./main-contacts.component.scss']
})
export class MainContactsComponent {

  constructor(public icons: IconsService) {
  }
}
