import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from './services/auth.service';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
	constructor(public messageService: MessageService, public authService: AuthService, private router: Router) {}

	ngOnInit(): void {
		this.authService.getAuth().subscribe(auth => {
			if (auth?.email) {
				this.authService.loggedInUserEmail = auth.email;
			}

			if (auth) {
				this.authService.isLoggedIn = true;
			} else {
				this.authService.isLoggedIn = false;
				this.router.navigate(['/login']);
			}
		});
	}
}
