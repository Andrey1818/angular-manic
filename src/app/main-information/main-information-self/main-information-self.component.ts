import {Component} from '@angular/core';

@Component({
  selector: 'app-main-information-self',
  templateUrl: './main-information-self.component.html',
  styleUrls: ['./main-information-self.component.scss']
})
export class MainInformationSelfComponent {

  load = false

  loaded() {
    setTimeout(() => {
      this.load = true
    }, 3000)
  }
}
