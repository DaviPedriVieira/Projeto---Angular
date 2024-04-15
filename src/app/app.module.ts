import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalComponent } from './components/local/local.component';
import { TemperatureComponent } from './components/temperature/temperature.component';

@NgModule({
  declarations: [
    AppComponent,
    LocalComponent,
    TemperatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
