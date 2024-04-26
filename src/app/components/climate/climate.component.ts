import { Component } from '@angular/core';
import { IWeatherData } from 'src/app/interfaces/iweather-data';
import { ApiServiceService } from 'src/app/services/apiSevice/api-service.service';
import { ThemeService } from 'src/app/services/themeServices/theme.service';

@Component({
  selector: 'app-climate',
  templateUrl: './climate.component.html',
  styleUrls: ['./climate.component.scss']
})
export class ClimateComponent {

  climateWeatherData!: IWeatherData;

  constructor(public apiService: ApiServiceService, public themeService: ThemeService) {}

  ngOnInit(){
    this.climateApiUse()
  }
  // falta perceber quando a cidade é mudada para as previsões mudarem junto
  toggleTheme() {
    this.themeService.toggleTheme()
  }

  climateApiUse(){
    this.apiService.fetchWeatherData().subscribe((data: IWeatherData) => {
      this.climateWeatherData = data;
    });
    return this.climateWeatherData
  }

  // Mostrar no HTML


  
  
  
}
