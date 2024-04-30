import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  currentTheme: string = '';

  constructor() {
    this.currentTheme = localStorage.getItem('Theme') || 'light';
    this.applyTheme()
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('Theme', this.currentTheme);
    this.applyTheme()
  }

  applyTheme() {
    if (this.currentTheme == 'dark') {
      document.body.classList.toggle('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  getIcon() {
    if (this.currentTheme === 'dark') {
      return '🌥️';
    } else {
      return '🌙';
    }
  }

  selectElementClass() {
    if (this.currentTheme === 'dark') {
      return true;
    } else {
      return false;
    }
  }
}

