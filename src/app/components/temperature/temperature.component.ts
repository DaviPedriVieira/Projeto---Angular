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


  temperatureWeatherData!: IWeatherData;
  temperatureSelectedCity!: string

  constructor(public apiService: ApiServiceService, public themeService: ThemeService) {}

  

  ngOnInit(){
    this.temperatureApiUse()
  }
  // falta perceber quando a cidade é mudada para a temperatura mudar junto
  toggleTheme() {
    this.themeService.toggleTheme();
  }

  temperatureApiUse(){
    this.apiService.getWeatherDataObservable().subscribe((data: IWeatherData | undefined) => {
      if (data !== undefined) {
        this.temperatureWeatherData = data;
      }
    });
  }

  teste() {
    this.temperatureApiUse()
  }

  // Mostrar no HTML
  showTemperature() {
    return this.temperatureWeatherData.results.temp
  }

  
}



