import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
    document.body.style.overflow = 'hidden'
  }

  ngOnDestroy() {
    document.body.style.overflowY = 'scroll'
  }
}
