import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app.module';

// this is the magic wand
let prodMode: boolean = window.hasOwnProperty('cordova');

console.log("prodMode", prodMode);

if (prodMode) {
	enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
