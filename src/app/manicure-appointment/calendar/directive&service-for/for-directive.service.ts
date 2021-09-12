import {ElementRef, Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})

export class forDirectiveService {
  choseElementDate: ElementRef
  choseElementTime : ElementRef
}
