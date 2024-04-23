import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ThemeService{

  currentTheme: string = '';
  themeChangeObservable: Observable<string>

  constructor() {
    this.currentTheme = localStorage.getItem('Theme') || 'light';
    this.applyTheme()
    this.themeChangeObservable = new Observable<string>((observer) => {
      observer.next(this.currentTheme);
    });
  }

  toggleTheme() {
    
    this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('Theme', this.currentTheme);
    this.applyTheme();
    
    
    this.themeChangeObservable = new Observable<string>((observer) => {
      observer.next(this.currentTheme);
    });

    this.changeIcon(this.currentTheme);
  }
  
  applyTheme() {
    document.body.classList.toggle('dark-mode');
  }

  getCurrentTheme() {
    return this.currentTheme;
  }

  getThemeChangeObservable(): Observable<string> {
    return this.themeChangeObservable;
  }

  changeIcon(currentTheme: string) {
    const toggle: any = document.getElementById('toggle');
    if (currentTheme === 'dark') {
      toggle.textContent = '🌥️';
    } else {
      toggle.textContent = '🌙';
    } 
  }
}
