import {Component} from '@angular/core';
import {IconsService} from "../../services/icons.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  constructor(public icons: IconsService) {
  }

}
