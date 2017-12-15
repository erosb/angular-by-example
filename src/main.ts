import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import {NgByExModule} from "./app/ng-by-ex.module";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(NgByExModule)
  .catch(err => console.log(err));
