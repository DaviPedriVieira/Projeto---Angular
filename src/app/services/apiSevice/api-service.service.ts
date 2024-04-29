import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IWeatherData } from 'src/app/interfaces/iweather-data';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private weatherDataSubject= new BehaviorSubject<IWeatherData | undefined>(undefined);

  constructor(private http: HttpClient) { 
    this.fetchWeatherData()
  }

  getWeatherDataObservable(): Observable<IWeatherData | undefined> {
    return this.weatherDataSubject.asObservable();
  }

  setWeatherData(weatherData: IWeatherData | undefined): void {
    this.weatherDataSubject.next(weatherData);
  }

  fetchWeatherData() {
    let selectedCity = localStorage.getItem('Cidade');
    let apiLink = `https://api.hgbrasil.com/weather?format=json-cors&key=bac82211&city_name=${selectedCity}`;
    return this.http.get<IWeatherData>(apiLink).pipe(
      tap((weatherData) => {
        this.weatherDataSubject.next(weatherData)
      })
    );
  }
}
