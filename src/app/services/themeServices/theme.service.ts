import { Injectable, OnInit } from '@angular/core';
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
    this.changeSelect(this.currentTheme)
    this.themeChangeObservable = new Observable<string>((observer) => {
      observer.next(this.currentTheme);
    });

  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('Theme', this.currentTheme);
    this.applyTheme()
    this.changeIcon(this.currentTheme);
    this.changeSelect(this.currentTheme);
  }

  applyTheme() {
    if (this.currentTheme == 'dark') {
      document.body.classList.toggle('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  changeIcon(currentTheme: string) {
    const changeThemeBtn: HTMLElement | null = document.getElementById('btnChangeTheme');
    if (changeThemeBtn!) {
      if (currentTheme === 'dark') {
        changeThemeBtn.textContent = '🌥️';
      } else {
        changeThemeBtn.textContent = '🌙';
      }
    } else {
      console.log("Button não foi encontrado")
    }
  }

  changeSelect(currentTheme: string) {
    const select: HTMLElement | null = document.getElementById('cities');
    if (select!) {
      if (currentTheme === 'dark') {
        select.classList.toggle('dark-mode')
        localStorage.setItem('Theme', 'dark');
      } else {
        select.classList.remove('dark-mode')
      }
    } else {
      console.log("Select não foi encontrado")
    }
  }
}

