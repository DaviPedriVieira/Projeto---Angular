import { Component } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';


@Component({
  selector: 'app-climate',
  templateUrl: './climate.component.html',
  styleUrls: ['./climate.component.scss']
})
export class ClimateComponent {

  constructor(public apiService: ApiServiceService) {}

  ngOnInit() {
    this.apiService.fetchWeatherData();
  }

  // changeIcon() {

  // }
}
