import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IWeatherData } from 'src/app/interfaces/iweather-data';
import { Observable, BehaviorSubject, map } from 'rxjs';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private behaviorWeatherData = new BehaviorSubject<IWeatherData | undefined>(undefined);

  constructor(private http: HttpClient) {}

  getBehaviorWeatherData(): Observable<IWeatherData | undefined> {
    return this.behaviorWeatherData.asObservable();
  }

  setBehaviorWeatherData(weatherData: IWeatherData | undefined): void {
    this.behaviorWeatherData.next(weatherData);
  }

  fetchWeatherData(): Observable<IWeatherData> {
    let selectedCity = localStorage.getItem('Cidade');
    let apiLink = `https://api.hgbrasil.com/weather?format=json-cors&key=bac82211&city_name=${selectedCity}`;
    return this.http.get<IWeatherData>(apiLink).pipe( 
      tap((weatherData) => { 
        this.setBehaviorWeatherData(weatherData);
      })
    );
  }
} 
