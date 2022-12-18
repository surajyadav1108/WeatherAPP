import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { HttpHeaders } from'@angular/common/http';
import { HttpParams } from'@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {

  constructor(private http: HttpClient) { }

  getWheatherData(cityName: string): Observable <WeatherData> {
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyHeaderKeyName, environment.XRapidAPIKeyHeaderKeyValue),

      params: new HttpParams()
      .set('city' , cityName)
      .set('mode', 'JSON')
    })
  }    

}
