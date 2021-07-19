import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
	public loggedInUser: string;
	public isLoggedIn: boolean;
	constructor(public authService: AuthService, public router: Router) {}
	ngOnInit(): void {
		this.getAuth();
	}

	public onMenuClick(route: string): void {
		this.router.navigate([route]);
	}

	public onLogoutClick(): void {
		this.authService.logout();
		this.router.navigate(['/login']);
	}

	getAuth() {
		this.authService.getAuth().subscribe(
			auth => {
				if (auth) {
					this.loggedInUser = auth.email;
					this.isLoggedIn = true;
				} else {
					this.isLoggedIn = false;
				}
			},
			error => {
				console.log(error);
			}
		);
	}
}
