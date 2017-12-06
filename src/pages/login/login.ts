import { Component } from '@angular/core';
import { AlertController, MenuController, LoadingController, Loading, IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

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

	formErrors = {
		'email': '',
		'password': ''
	};

	validationMessages = {
		'email': {
			'required': 'email is required.',
			'email': 'email is not valid',
			'minlength': 'minimum password length is 8!',
			'maxlength': 'maximum password length is 30!'
		},
		'password': {
			'required': 'Password is required.'
		}
	};

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public menuCtrl: MenuController,
		private loadingCtrl: LoadingController,
		public alertCtrl: AlertController,
		private formBuilder: FormBuilder,
		public translate: TranslateService
	) {

		this.authForm = this.formBuilder.group({
			email: ['', Validators.compose([Validators.required, Validators.email, Validators.minLength(8), Validators.maxLength(30)])],
			password: ['', Validators.compose([Validators.required])]
		});

		this.email = this.authForm.controls['email'];
		this.password = this.authForm.controls['password'];

		this.authForm.valueChanges.subscribe(data => this.onValueChanged(data));
		this.onValueChanged();

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

	onValueChanged(data?: any) {

		if (!this.authForm) {
			return;
		}

		const form = this.authForm;
		if (form.pristine) {
			return;
		}

		if (!form.dirty) {
			return;
		}

		for (const field in this.formErrors) {
			this.formErrors[field] = '';
			const control = form.controls[field];
			if (control && control.dirty && !control.valid) {
				const messages = this.validationMessages[field];
				for (const key in control.errors) {
					if (messages[key]) this.formErrors[field] = messages[key];
				}
			}
		}

	}


}
