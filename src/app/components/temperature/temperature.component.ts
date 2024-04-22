import { Component } from '@angular/core';
import { ApiServiceService } from 'src/app/services/apiSevice/api-service.service';
import { ThemeService } from 'src/app/services/themeServices/theme.service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent {

  constructor(public apiService: ApiServiceService, public themeService: ThemeService) {}
  
  toggleTheme() {
    this.themeService.toggleTheme();
  }
}



