import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherserviceService } from './services/weatherservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {


  myScriptElement: HTMLScriptElement; // try for weatherjs embed


  constructor( private wheatherService: WeatherserviceService) {
    this.myScriptElement = document.createElement("script"); //try for weatherjs embed
    this.myScriptElement.src = "src/assets/wheather.js"; //try for weatherjs embed
    document.body.appendChild(this.myScriptElement); //try for weatherjs embed
  }

  weatherData?: WeatherData;

  ngOnInit(): void{
    this.wheatherService.getWheatherData('New Delhi')
    .subscribe({
      next: (response) => {
        this.weatherData = response; 

        console.log(response);
      }
    });
    
  }
}


