import { Component } from '@angular/core';
import { AlertController, MenuController, LoadingController, Loading, IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@IonicPage()

@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage {

	loading: Loading;

	authForm: FormGroup;
	email: AbstractControl;
	password: AbstractControl;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public menuCtrl: MenuController,
		private loadingCtrl: LoadingController,
		public alertCtrl: AlertController,
		private formBuilder: FormBuilder
	) {
		this.authForm = this.formBuilder.group({
			email: ['', Validators.compose([Validators.required, Validators.email, Validators.minLength(8), Validators.maxLength(30)])],
			password: ['', Validators.compose([Validators.required])]
		});

		this.email = this.authForm.controls['email'];
		this.password = this.authForm.controls['password'];
	}

	ionViewDidLoad() {
		this.menuCtrl.enable(false, 'side-menu');
	}

	public login(value: any): void {

		if (this.authForm.valid) {

			this.showLoading();

		}

	}

	showLoading() {
		this.loading = this.loadingCtrl.create({
			content: 'Por favor espera...',
			dismissOnPageChange: true
		});
		this.loading.present();
	}

}
