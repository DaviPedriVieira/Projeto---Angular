import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  weatherData: any;

  constructor(private http: HttpClient) { }

  fetchWeatherData(selectedCity?: string) {
    let city = selectedCity || 'Jaraguá do Sul, SC';
    let apiLink = `https://api.hgbrasil.com/weather?format=json-cors&key=bac82211&city_name=${city}`
    return this.http.get<any>(apiLink).subscribe((data) => {this.weatherData = data;});
  }

  updateCity() {
    this.fetchWeatherData();
  }
}