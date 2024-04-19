import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  // loadTheme()
  const body: any = document.querySelector('body');
  const toggle: any = document.getElementById('toggle');
  toggle.onclick = function() {
    toggle.classList.toggle('active')
    body.classList.toggle('dark-mode')
    // saveTheme()
  }

  // function saveTheme() {
  //   localStorage.setItem('Theme', toggle.classList)
  // }

  // function loadTheme() {
  //   let theme = localStorage.getItem('Theme')
  //   if(theme == 'Active') {
  //     toggle.click()
  //   }
  // }
