import { Component } from '@angular/core';
import { IForecast } from 'src/app/interfaces/iforecast';
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
  forecast!: IForecast;

  constructor(public apiService: ApiServiceService, public themeService: ThemeService) {}

  ngOnInit(){
    this.climateApiUse()
  }

  toggleTheme() {
    this.themeService.toggleTheme()
  }

  climateApiUse(){
    this.apiService.getWeatherDataObservable().subscribe((data: IWeatherData | undefined) => {
      if (data !== undefined) {

        this.climateWeatherData = data;
      }
    });
    return this.climateWeatherData
  }
  
  // Mostrar no HTML
  howMuchClimate(): IForecast[] {
    return this.climateWeatherData.results.forecast.slice(1, 6);
  }

  getWeekday(forecast: IForecast): string {
    return forecast.weekday;
  }

  getConditionImage(forecast: IForecast): string {
    return `./assets/${forecast.condition}.svg`;
  }

  getTemperatureRange(forecast: IForecast): string {
    return `${forecast.min}° - ${forecast.max}°`;
  }

  getRainProbability(forecast: IForecast): string {
    return `💧 ${forecast.rain_probability}%`;
  }

  getWindSpeed(forecast: IForecast): string {
    return `🍃 ${forecast.wind_speedy}`;
  }
  
}

