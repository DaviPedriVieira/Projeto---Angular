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
}
