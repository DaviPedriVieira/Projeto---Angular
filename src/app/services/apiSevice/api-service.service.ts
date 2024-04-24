import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IWeatherData } from 'src/app/interfaces/iweather-data';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  
  weatherData!: IWeatherData;
  
  constructor(private http: HttpClient) { }

  fetchWeatherData(selectedCity?: string) {
    let city = selectedCity || 'Jaraguá do Sul, SC'
    let apiLink = `https://api.hgbrasil.com/weather?format=json-cors&key=437ede73&city_name=${city}`
    return this.http.get<IWeatherData>(apiLink).subscribe((data) => {
      this.weatherData = data;
    });
  }
}
