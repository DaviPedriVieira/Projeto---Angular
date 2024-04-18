import { Component } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent {

  constructor(public apiService: ApiServiceService) {}

  ngOnInit() {
    // this.apiService.fetchWeatherData();
  }
}



