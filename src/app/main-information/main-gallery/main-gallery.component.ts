import {Component, OnInit} from '@angular/core';
import {DataPhotoService} from "./service/data-photo.service";
import {Image} from "../../shared/app.interfaces";

@Component({
  selector: 'app-main-gallery',
  templateUrl: './main-gallery.component.html',
  styleUrls: ['./main-gallery.component.scss']
})
export class MainGalleryComponent implements OnInit {

  arrPhoto: Image[] = []

  constructor(public dataPhotoService: DataPhotoService) {
  }

  ngOnInit(): void {
    this.dataPhotoService.getPhoto().subscribe((Photo) => {
      this.arrPhoto = Photo.reverse()
    })
  }

}
