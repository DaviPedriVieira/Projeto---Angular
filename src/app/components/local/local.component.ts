import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/apiSevice/api-service.service';
import { ThemeService } from 'src/app/services/themeServices/theme.service';


@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.scss']
})
export class LocalComponent implements OnInit {

  selectedCity: string = 'Jaraguá do Sul'

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
    { name: 'Grajaú, MA' },
  ];


  constructor(public apiService: ApiServiceService, public themeService: ThemeService) { }

  toggleTheme() {
    this.themeService.toggleTheme()
  }

  ngOnInit() {
    this.selectedCity = localStorage.getItem('Cidade') || 'Jaraguá do Sul, SC';
    this.apiService.fetchWeatherData(this.selectedCity);
    this.themeService.changeIcon(this.themeService.currentTheme);
  }

  changeCity() {
    this.apiService.fetchWeatherData(this.selectedCity)
    this.saveCityOnLocalStorage()
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


}