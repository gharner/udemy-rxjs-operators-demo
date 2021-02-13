import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
	constructor(private authService: AuthService, private router: Router, private messageService: MessageService) {}

	ngOnInit() {
		this.authService.getAuth().subscribe(
			auth => {
				if (auth) {
					this.router.navigate(['/']).catch(error => {
						console.log(error);
						this.messageService.add({
							severity: 'error',
							summary: 'Something went wrong in the LoginComponent function onSubmit!',
							detail: error.error.text,
							sticky: true,
						});
					});
					return;
				}
			},
			error => {
				console.log(error);
				this.messageService.add({
					severity: 'error',
					summary: 'Something went wrong in the LoginComponent function ngOnInit!',
					detail: error.error.text,
					sticky: true,
				});
			}
		);
	}

	onSubmit() {
		this.authService
			.login()
			.then(() => {
				this.router.navigate(['/']);
			})
			.catch(error => {
				console.log(error);
				this.messageService.add({
					severity: 'error',
					summary: 'Something went wrong in the LoginComponent function onSubmit!',
					detail: error.error.text,
					sticky: true,
				});
			});
	}
}
