import { Component } from '@angular/core';
import { ViewController, IonicPage } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

@IonicPage()

@Component({
	selector: 'page-splash',
	templateUrl: 'splash.html',
})

export class SplashPage {

	constructor(
		public viewCtrl: ViewController,
		public splashScreen: SplashScreen
	) {
	}

	ionViewDidEnter() {

		this.splashScreen.hide();

		setTimeout(() => {
			this.viewCtrl.dismiss();
		}, 3000);

	}

}
