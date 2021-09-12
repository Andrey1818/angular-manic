import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';
import {forDirectiveService} from "./for-directive.service";


@Directive({
  selector: '[appTimeBlock]'
})
export class TimeBlockDirective {

  constructor(
    private element: ElementRef,
    private render: Renderer2,
    private forDirectiveService: forDirectiveService
  ) {
  }

  @HostListener('click') click() {
    if (this.forDirectiveService.choseElementTime) {
      this.render.setStyle(this.forDirectiveService.choseElementTime.nativeElement, 'opacity', null)
      this.render.setStyle(this.forDirectiveService.choseElementTime.nativeElement, 'color', null)
    }
    this.render.setStyle(this.element.nativeElement, 'opacity', 1)
    this.render.setStyle(this.element.nativeElement, 'color', 'white')
    this.forDirectiveService.choseElementTime = this.element
  }
}
