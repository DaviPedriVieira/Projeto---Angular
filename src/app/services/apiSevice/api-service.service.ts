import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IWeatherData } from 'src/app/interfaces/iweather-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private weatherDataCache: { [city: string]: IWeatherData } = {};
  weatherData!: IWeatherData

  constructor(private http: HttpClient) { }

  fetchWeatherData() {
    let selectedCity = localStorage.getItem('Cidade');
    let city = selectedCity || 'Jaraguá do Sul, SC';

    if (this.weatherDataCache[city]) {
      return of(this.weatherDataCache[city]);
    } else {
      let apiLink = `https://api.hgbrasil.com/weather?format=json-cors&key=bac82211&city_name=${city}`;
      return this.http.get<IWeatherData>(apiLink)/*pipe e tap*/ 

    }
  }
}












// baheviorSubject<IWeaher | undefined> -- get(asObservable()) e set(next())
// fetch no constructor
// local é o único que chama o fetch

// o resto pega com base no cache/bahevior

// subscribe nos componentes --> FEITO

// weather data = observable

// cache: comparar valor do selected city com outra váriavel com o mesmo valor para quando ele mudar seja reconsultado, senão não

// fazer o selected city no service, não vindo do local/header --> FEITO