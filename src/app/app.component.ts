import { Component, ViewChild } from '@angular/core';
import { AlertController, Nav, Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';

import { ENV } from '@app/env';

@Component({
	templateUrl: 'app.html'
})

export class MyApp {

	rootPage: string = 'LoginPage';
	alert;
	showSplash = true;

	chosenPicture = 'https://avatars1.githubusercontent.com/u/8704016';

	@ViewChild(Nav) nav: Nav;

	constructor(
		private platform: Platform,
		private statusBar: StatusBar,
		private splashScreen: SplashScreen,
		private alertCtrl: AlertController,
		private storage: Storage,
		private translate: TranslateService,
		private modalCtrl: ModalController
	) {

		this.translate.setDefaultLang('en');

		this.platform.ready().then(() => {

			console.log(ENV.mode);

			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			this.statusBar.styleDefault();

			if (this.showSplash) {
				let splash = this.modalCtrl.create('SplashPage');
				splash.present();
			} else {
				this.splashScreen.hide();
			}

			/**
 			* Boton atras para cerrar
 			*/
			this.platform.registerBackButtonAction(() => {

				// if (this.backButtonPressedOnceToExit) {
				//   this.platform.exitApp();
				// } else if (this.nav.canGoBack()) {
				//   this.nav.pop({});
				// } else {
				//   this.showToast();
				//   this.backButtonPressedOnceToExit = true;
				//   setTimeout(() => {
				//     this.backButtonPressedOnceToExit = false;
				//   },2000)
				// }

				if (this.nav.canGoBack()) {
					this.nav.pop();
				} else {
					if (this.alert) {
						this.alert.dismiss();
						this.alert = null;
					} else {
						this.showAlert();
					}
				}
			});


		});

		this.storage.get('AppLangcode').then((AppLangcode) => {

			if (AppLangcode == null) {

				const browserLang = this.translate.getBrowserLang();
				const browserCultureLang = this.translate.getBrowserCultureLang();

				console.log(browserLang, browserCultureLang);

				if (browserLang) {
					this.translate.use(this.translate.getBrowserLang());
				} else {
					this.translate.use('en');
				}

			} else {
				this.translate.use(AppLangcode);
			}

		});

	}

	showAlert() {
		this.alert = this.alertCtrl.create({
			title: 'Estas seguro de salir?',
			cssClass: '',
			buttons: [
				{
					text: 'Cancelar',
					role: 'cancel',
					handler: () => {
						this.alert = null;
					}
				},
				{
					text: 'Salir',
					handler: () => {
						this.platform.exitApp();
					}
				}
			]
		});
		this.alert.present();
	}

	/* showToast() {
		let toast = this.toastCtrl.create({
			message: 'Presione nuevamente para salir',
			duration: 2000,
			position: 'bottom'
		});

		toast.onDidDismiss(() => {
			console.log('Dismissed toast');
		});

		toast.present();
	} */

}

