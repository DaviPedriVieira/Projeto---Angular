import { Component } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.scss']
})
export class LocalComponent {
  
  selectedCity = "Jaraguá do Sul, SC"
  
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

  constructor(public apiService: ApiServiceService) {}

  ngOnInit() {
    this.apiService.fetchWeatherData();
  }

  changeCity() {
    this.apiService.fetchWeatherData(this.selectedCity)
  }

  data: Date = new Date();
  day: number = this.data.getDate();
  year: number = this.data.getFullYear();
  
  getTheDayOfTheWeek(data: Date) {
    const week = [
      "Domingo",
      "Segunda-feira", 
      "Terça-feira", 
      "Quarta-feira", 
      "Quinta-feira", 
      "Sexta-feira", 
      "Sábado"
    ]
    return week[data.getDay()]
  }

  getTheMonth(data: Date) {
    const months = [
      "Janeiro", 
      "Fevereiro", 
      "Março", 
      "Abril", 
      "Maio", 
      "Junho", 
      "Julho", 
      "Agosto", 
      "Setembro", 
      "Outubro",
      "Novembro",
      "Dezembro"
    ]
    return months[data.getMonth()]
  }
}




