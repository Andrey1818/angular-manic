import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';
import {forDirectiveService} from "./for-directive.service";

@Directive({
  selector: '[appDateBlock]'
})
export class DateBlockDirective {

  constructor(
    private element: ElementRef,
    private render: Renderer2,
    private forDirectiveService: forDirectiveService
  ) {
  }

  @HostListener('mouseenter') mouseEnter() {
    let classes = this.element.nativeElement.classList
    classes = Array.from(classes)
    if (
      this.element.nativeElement !== this.forDirectiveService.choseElementDate
      && !classes.find((elClass: string) => elClass === 'busy')) {
      this.render.setStyle(this.element.nativeElement, 'transform', 'scale(1.05)')
      this.render.setStyle(this.element.nativeElement, 'boxShadow', '0 0 10px')
      this.render.setStyle(this.element.nativeElement, 'zIndex', '1')
      this.render.setStyle(this.element.nativeElement, 'transition', 'transform 0.5s')
    }
  }

  @HostListener('mouseleave') mouseLeave() {
    this.render.setStyle(this.element.nativeElement, 'transform', null)
    this.render.setStyle(this.element.nativeElement, 'boxShadow', null)
    this.render.setStyle(this.element.nativeElement, 'zIndex', null)
  }

  @HostListener('click') click() {
    let classes = this.element.nativeElement.classList
    classes = Array.from(classes)
    if (!classes.find((elClass: string) => elClass === 'busy')) {
      if (this.forDirectiveService.choseElementDate) {
        if (this.forDirectiveService.choseElementTime) {
          this.render.setStyle(this.forDirectiveService.choseElementTime.nativeElement, 'opacity', null)
          this.render.setStyle(this.forDirectiveService.choseElementTime.nativeElement, 'color', null)
        }
        this.render.setStyle(this.forDirectiveService.choseElementDate.nativeElement, 'background', null)
      }
      this.render.setStyle(this.element.nativeElement, 'background', '#54f5f5', 1)
      this.forDirectiveService.choseElementDate = this.element
    }
  }
}
