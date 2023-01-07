import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { UnsplashService } from './services/Unsplash.service';
import { WeatherserviceService } from './services/weatherservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit  {
  photos: any; // new variable for unsplash

  constructor(private wheatherService: WeatherserviceService , private unsplashService: UnsplashService) { 

  }

  cityName: string = 'New Delhi';
  weatherData?: WeatherData;
  getImageUrl: string = '';
 

  ngOnInit(): void{
    
    this.getweatherData(this.cityName);
    this.cityName = '';


    this.unsplashService.getPhotos('new delhi').subscribe(photos => {      // opening of the app /////////////////////////
      this.photos = photos;
      document.body.style.backgroundImage = `url(${this.photos.results[0].urls.raw})`;
    });

  }

  

  onSubmit() {
    if(this.cityName == ''){
      alert("please type city name first"); // created an alert message here for empty input.
    }else {
      this.getweatherData(this.cityName);
      this.unsplashService.getPhotos(this.cityName).subscribe(photos => {   //fetches background image for the city
        this.photos = photos;
        document.body.style.backgroundImage = `url(${this.photos.results[0].urls.raw})`;
      });

      this.cityName = '';  
    }
  }
  // this is not a good code format will change it later as i  have created a single function for each click
  onNewyork(){
    this.getweatherData('New york');
    this.unsplashService.getPhotos('New york').subscribe(photos => {
      this.photos = photos;
      document.body.style.backgroundImage = `url(${this.photos.results[0].urls.raw})`;
    });

  }

  onCalifornia(){
    this.getweatherData('California');
    this.unsplashService.getPhotos('California').subscribe(photos => {
      this.photos = photos;
      document.body.style.backgroundImage = `url(${this.photos.results[0].urls.raw})`;
    });

  }

  onParis(){
    this.getweatherData('Paris');
    this.unsplashService.getPhotos('Paris').subscribe(photos => {
      this.photos = photos;
      document.body.style.backgroundImage = `url(${this.photos.results[0].urls.raw})`;
    });

  }

  onTokyo(){
    this.getweatherData('Tokyo');
    this.unsplashService.getPhotos('Tokyo').subscribe(photos => {
      this.photos = photos;
      document.body.style.backgroundImage = `url(${this.photos.results[0].urls.raw})`;
    });

  }
//////////////////////////////////////////////////////////////////////// subscribing the service down below
  

  private getweatherData(cityName: string) {

    this.wheatherService.getWheatherData(cityName)
    .subscribe({
      next: (response) => {
        this.weatherData = response; 

        console.log(response);
      }
    });
    
    

    



  }


  

}

/////////////////////////////////////////////////////////////////////////////////




