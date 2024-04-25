import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

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
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('Theme', this.currentTheme);
    this.applyTheme()
    this.changeElementsTheme(this.currentTheme);
  }

  applyTheme() {
    if (this.currentTheme == 'dark') {
      document.body.classList.toggle('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  changeElementsTheme(currentTheme: string) {
    const select: HTMLElement | null = document.getElementById('cities');
    const changeThemeBtn: HTMLElement | null = document.getElementById('btnChangeTheme');
    if (changeThemeBtn!) {
      if (currentTheme === 'dark') {
        changeThemeBtn.textContent = '🌥️';
        select!.classList.add('dark-mode')
      } else {
        changeThemeBtn.textContent = '🌙';
        select!.classList.remove('dark-mode')
      }
    } else {
      console.log("Button não foi encontrado")
    }
  }

  
}

