import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
	constructor(public authService: AuthService, public router: Router) {}
	ngOnInit(): void {}

	public onMenuClick(route: string): void {
		this.router.navigate([route]);
	}

	public onLogoutClick(): void {
		this.authService.isLoggedIn = false;

		this.authService.logout();
		this.router.navigate(['/login']);
	}
}
