import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  currentTheme: string;
  themeChangeObservable: Observable<string>

  constructor() {
    this.currentTheme = localStorage.getItem('Theme') || 'light';
    this.applyTheme(this.currentTheme)
    this.themeChangeObservable = new Observable<string>((observer) => {
      observer.next(this.currentTheme);
    });
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('Theme', this.currentTheme);
    this.applyTheme(this.currentTheme);

    this.themeChangeObservable = new Observable<string>((observer) => {
      observer.next(this.currentTheme);
    });
  }

  applyTheme(theme: string) {
    document.body.classList.toggle('dark-theme', theme === 'dark');
  }

  getCurrentTheme() {
    return this.currentTheme;
  }

  getThemeChangeObservable(): Observable<string> {
    return this.themeChangeObservable;
  }

}
