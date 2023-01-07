import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { environment } from 'src/environments/environment';
//import { HttpHeaders } from'@angular/common/http';
//import { HttpParams } from'@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {
  constructor(private http: HttpClient) {}

  // getPhotos(cityName: string) {
  //   return this.http.get(environment.UnsplashServicebaseURL, {
  //       headers: new HttpHeaders(),
  //       params: new HttpParams()
  //       .set('q' , cityName)                         //old method for the background image
  //   })
  
  // }

  getPhotos(cityName: string) {
    return this.http.get(`https://api.unsplash.com/search/photos?query=${cityName}&client_id=XIG1unSfHk9jeKa_DaaZXcClgkZO2Vd43k0Q2-52PbQ`);
  }
}

