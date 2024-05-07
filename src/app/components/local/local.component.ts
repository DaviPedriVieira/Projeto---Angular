import { Component, OnInit } from '@angular/core';
import { IWeatherData } from 'src/app/interfaces/iweather-data';
import { ApiServiceService } from 'src/app/services/apiSevice/api-service.service';
import { ThemeService } from 'src/app/services/themeServices/theme.service';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.scss']
})
export class LocalComponent implements OnInit {

  selectedCity!: string;
  weatherData!: IWeatherData;
  date: Date = new Date();
  monthDay: number = this.date.getDate();
  year: number = this.date.getFullYear();

  cities = [
    { name: 'Jaraguá do Sul, SC' },
    { name: 'São Paulo, SP' },
    { name: 'Rio de Janeiro, RJ' },
    { name: 'Florianópolis, SC' },
    { name: 'Natal, RN' },
    { name: 'Porto Alegre, RS' },
    { name: 'Belo Horizonte, MG' },
    { name: 'Curitiba, PR' },
    { name: 'Recife, PE' },
    { name: 'Vitória, ES' },
    { name: 'Manaus, AM' },
    { name: 'Belém, PA' },
  ];

  constructor(public apiService: ApiServiceService, public themeService: ThemeService) { }

  ngOnInit(): void {
    this.selectedCity = localStorage.getItem('City') || "";
    
    this.apiService.getBehaviorWeatherData().subscribe((data: IWeatherData | undefined) => {
      if (data !== undefined) {
        this.weatherData = data;
      }
    });
  }
  
  changeTheme(): void {
    this.themeService.toggleTheme()
  }

  localApiUse(): void {
    this.apiService.fetchWeatherData().subscribe((data: IWeatherData) => {
        this.weatherData = data;
    });
  }

  changeCity(): void {
    this.saveCityOnLocalStorage()
    this.localApiUse()
  }

  saveCityOnLocalStorage(): void {
    localStorage.setItem('City', this.selectedCity);
  }
  
  getDate() {
    const weekDay = this.date.toLocaleString("default", { weekday: 'long' });
    const month = this.date.toLocaleString("default", { month: 'long' });
    return `${weekDay.charAt(0).toUpperCase() + weekDay.slice(1)}, ${this.monthDay} de ${month.charAt(0).toUpperCase() + month.slice(1)} de ${this.year}`;
  }

  showCity(): string {
    return this.weatherData?.results.city
  }

  bntIcon(): string {
    return this.themeService.currentTheme === 'dark' ? '🌥️' : '🌙';
  }
}
