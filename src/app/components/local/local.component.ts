import { Component } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.scss']
})
export class LocalComponent {
  
  constructor(public apiService: ApiServiceService) {}

  ngOnInit() {
    this.apiService.fetchWeatherData();
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
