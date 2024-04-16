import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalComponent } from './components/local/local.component';
import { TemperatureComponent } from './components/temperature/temperature.component';
import { ClimateComponent } from './components/climate/climate.component';
import { ApiServiceService } from './services/api-service.service';

// Chave da API: bac82211

@NgModule({
  declarations: [
    AppComponent,
    LocalComponent,
    TemperatureComponent,
    ClimateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientJsonpModule,
    HttpClientModule,
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
