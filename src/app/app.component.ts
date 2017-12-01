import { Component, ViewChild } from '@angular/core';
import { AlertController, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

@Component({
	templateUrl: 'app.html'
})

export class MyApp {

	rootPage: string = 'HomePage';
	alert;

	@ViewChild(Nav) nav: Nav;

	constructor(
		private platform: Platform,
		private statusBar: StatusBar,
		private splashScreen: SplashScreen,
		private alertCtrl: AlertController
	) {

		this.platform.ready().then(() => {

			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			this.statusBar.styleDefault();

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

	ngAfterViewInit() {
		this.splashScreen.hide();
	}
}

