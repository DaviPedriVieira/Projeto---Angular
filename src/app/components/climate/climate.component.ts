import { Component } from '@angular/core';
import { ApiServiceService } from 'src/app/services/apiSevice/api-service.service';
import { ThemeService } from 'src/app/services/themeServices/theme.service';

@Component({
  selector: 'app-climate',
  templateUrl: './climate.component.html',
  styleUrls: ['./climate.component.scss']
})
export class ClimateComponent {


  constructor(public apiService: ApiServiceService, public themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme()
  }

  
  
}
