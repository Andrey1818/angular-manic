import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Image} from "../../../shared/app.interfaces";
import {environment} from "../../../../environments/environment";
import {map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataPhotoService {

  constructor(private http: HttpClient) {
  }

  getPhoto(): Observable<Image[]> {
    return this.http.get(`${environment.fbDbUrl}/images.json`)
      .pipe(
        tap(response => {
          console.log(response)
        }),
        map((response: { [key: string]: any }) => {
          return Object
            .keys(response)
            .map(key => ({
              ...response[key],
              id: key
            }))
        })
      )
  }
}
