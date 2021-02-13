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
	//private user$: Observable<firebase.User>;
	public isLoggedIn: boolean;
	public loggedInUserEmail: string;

	constructor(public afAuth: AngularFireAuth) {
		this.initClient();
		//this.user$ = afAuth.authState;
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

		return await this.afAuth.signInWithCredential(credential).catch(error => {
			console.log(error);
		});
	}

	async logout() {
		await this.afAuth.signOut().catch(error => {
			console.log(error);
		});
	}

	getAuth() {
		return this.afAuth.authState.pipe(map(user => user));
	}
}
