import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { gapiSettings } from '../../environments/gapisettings';

declare var gapi: any;
@Injectable({
	providedIn: 'root',
})
export class AuthService {
	user$: Observable<firebase.User>;

	constructor(public afAuth: AngularFireAuth) {
		this.initClient();
		this.user$ = afAuth.authState;
	}

	initClient() {
		gapi.load('client', () => {
			gapi.client.init(gapiSettings.Cfg);
			gapi.client.load('people', 'v1');
		});
	}

	async login() {
		const googleAuth = gapi.auth2.getAuthInstance();
		const googleUser = await googleAuth.signIn();
		const token = googleUser.getAuthResponse().id_token;
		const credential = auth.GoogleAuthProvider.credential(token);

		return new Promise((resolve, reject) => {
			this.afAuth.signInWithCredential(credential).then(
				data => resolve(data),
				error => reject(error.message)
			);
		});
	}

	logout() {
		this.afAuth.signOut();
	}

	getAuth() {
		return this.afAuth.authState.pipe(map(user => user));
	}
}
