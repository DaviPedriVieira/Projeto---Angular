import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  
  weatherData: any;
  
  constructor(private http: HttpClient) { }

  fetchWeatherData(selectedCity?: string) {
    let city = selectedCity || 'Jaraguá do Sul, SC'
    let apiLink = `https://api.hgbrasil.com/weather?format=json-cors&key=265e696e&city_name=${city}`
    return this.http.get<any>(apiLink).subscribe((data) => {
      this.weatherData = data;
      console.log(this.weatherData)
    });
  }
}













// https://refactoring.guru/

// behavior subject angular <- esse cara terá que emitir para o resto do código o valor a ser consultado

// nos outros componentes deveria ser pego o valor do local storage, não colocar toda essa função no local/header

// dar um jeito de chamar a api no main.ts