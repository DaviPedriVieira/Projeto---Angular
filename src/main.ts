import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  const body: any = document.querySelector('body');
  const toggle: any = document.getElementById('toggle');
  toggle.onclick = function() {
    toggle.classList.toggle('active')
    body.classList.toggle('dark-mode')
  }