import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IWeatherData } from 'src/app/interfaces/iweather-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  weatherData!: IWeatherData;
  selectedCity = localStorage.getItem('Cidade');

  constructor(private http: HttpClient) { }

  fetchWeatherData() {
    let selectedCity = localStorage.getItem('Cidade');
    let city = selectedCity || 'Jaraguá do Sul, SC'
    const apiKey = '265e696e'
    let apiLink = `https://api.hgbrasil.com/weather?format=json-cors&key=${apiKey}&city_name=${city}`
    return this.http.get<IWeatherData>(apiLink).subscribe((data) => {
      this.weatherData = data;
    });

  }
}





// subscribe nos componentes

// weather data = observable

// cache: comparar valor do selected city com outra váriavel com o mesmo valor para quando ele mudar seja reconsultado, senão não

// fazer o selected city no service, não vindo do local/header --> FEITO