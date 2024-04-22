import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

const body: any = document.querySelector('body');
const toggle: any = document.getElementById('toggle');

function saveTheme(toggleStatus: string) {
  localStorage.setItem('Theme', toggleStatus);
}

function aplicarTema(toggleStatus: string) {
  if (toggleStatus === 'dark') {
    toggle.classList.add('active');
    body.classList.add('dark-mode');
  } else {
    toggle.classList.remove('active');
    body.classList.remove('dark-mode');
  }
}

window.onload = function() {
  const temaSalvo = localStorage.getItem('Theme');
  if (temaSalvo) {
    aplicarTema(temaSalvo);
  }
};

toggle.onclick = function() {
  toggle.classList.toggle('active');
  body.classList.toggle('dark-mode');
  
  const temaAtual = body.classList.contains('dark-mode') ? 'dark' : 'light';
  saveTheme(temaAtual);
};
