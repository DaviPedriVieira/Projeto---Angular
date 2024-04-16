import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  weatherData: any;

  constructor(private http: HttpClient) { }

  fetchWeatherData() {
    return this.http
    .get<any>('https://api.hgbrasil.com/weather?format=json-cors&key=bac82211').subscribe((data) => {this.weatherData = data;});
  }
}















// para as imagens concatenar o nome dado pela Api com o .svg das imgs
//criar interface para substituir os anys