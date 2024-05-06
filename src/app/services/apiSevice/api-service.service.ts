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

  constructor(private http: HttpClient) {
    this.fetchWeatherData().subscribe();
  }

  getBehaviorWeatherData(): Observable<IWeatherData | undefined> {
    return this.behaviorWeatherData.asObservable();
  }

  setBehaviorWeatherData(weatherData: IWeatherData | undefined): void {
    this.behaviorWeatherData.next(weatherData);
  }

  fetchWeatherData(): Observable<IWeatherData> {
    const selectedCity: string | null = localStorage.getItem('City') || 'Jaraguá do SUl, SC';
    const apiLink = `https://api.hgbrasil.com/weather?format=json-cors&key=265e696e&city_name=${selectedCity}`;
    return this.http.get<IWeatherData>(apiLink).pipe( 
      tap((weatherData) => { 
        this.setBehaviorWeatherData(weatherData);
      })
    );
  }
} 
