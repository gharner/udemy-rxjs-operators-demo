import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private afAuth: AngularFireAuth) {}

	canActivate(): Observable<boolean> {
		return this.afAuth.authState.pipe(
			map(auth => {
				if (!auth) {
					return false;
				} else {
					return true;
				}
			})
		);
	}
}
