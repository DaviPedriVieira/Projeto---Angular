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
  localWeatherData!: IWeatherData;

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

  toggleTheme() {
    this.themeService.toggleTheme()
  }

  localApiUse() {
    this.apiService.fetchWeatherData().subscribe((data: IWeatherData) => {
      this.localWeatherData = data;
    });
    return this.localWeatherData
  }

  ngOnInit() {
    this.selectedCity = localStorage.getItem('Cidade') || 'Jaraguá do Sul, SC';
    this.localApiUse()
  }

  changeCity() {
    this.saveCityOnLocalStorage()
    this.localApiUse()
  }

  saveCityOnLocalStorage() {
    localStorage.setItem('Cidade', this.selectedCity);
  }

  date: Date = new Date();
  day: number = this.date.getDate();
  year: number = this.date.getFullYear();

  getTheDayOfTheWeek() {
    const weekDay = this.date.toLocaleString("default", { weekday: 'long' });
    return weekDay.charAt(0).toUpperCase() + weekDay.slice(1);
  }

  getTheMonth() {
    const month = this.date.toLocaleString("default", { month: 'long' });
    return month.charAt(0).toUpperCase() + month.slice(1);
  }

  // Mostrar no HTML
  showCity() {
    return this.localWeatherData?.results.city
  }

  btnIcon() {
    return this.themeService.getIcon()
  }

  select() {
    return this.themeService.selectElementClass()
  }
}