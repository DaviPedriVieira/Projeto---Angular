import { Component, OnInit } from '@angular/core';
import { IWeatherData } from 'src/app/interfaces/iweather-data';
import { ApiServiceService } from 'src/app/services/apiSevice/api-service.service';
import { ThemeService } from 'src/app/services/themeServices/theme.service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent implements OnInit{

  weatherData!: IWeatherData;

  constructor(public apiService: ApiServiceService, public themeService: ThemeService) {}

  ngOnInit(): void {
    this.temperatureApiUse()
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  temperatureApiUse(): void {
    this.apiService.getBehaviorWeatherData().subscribe((data: IWeatherData | undefined) => {
      if (data !== undefined) {
        this.weatherData = data;
      }
    });
  }

  
  showTemperature(): number {
    return this.weatherData?.results.temp
  }
}



