import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  currentTheme: string = '';
  renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) { 
    this.renderer = rendererFactory.createRenderer(null, null); 
    this.currentTheme = localStorage.getItem('Theme') || 'light';
    this.applyTheme()
  }

  toggleTheme(): void {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('Theme', this.currentTheme);
    this.applyTheme()
  }

  applyTheme(): void {
    if (this.currentTheme == 'dark') {
      this.renderer.addClass(document.body, 'dark-mode');
    } else {
      this.renderer.removeClass(document.body, 'dark-mode');
    }
  }

  getIcon(): string {
    return this.currentTheme === 'dark' ? '🌥️' : '🌙';
  }

  selectElementClass(): boolean {
    return this.currentTheme === 'dark' ? true : false;
  }
}

