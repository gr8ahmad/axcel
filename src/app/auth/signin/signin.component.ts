import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
	private errorMessage: string;
	constructor(private authService: AuthService) {}
	onLogin(form: NgForm) {
		const email = form.value.email;
		const pwd = form.value.pwd;
		this.authService.signInUser(email, pwd);
	}
	ngOnInit() {

	this.authService.getLoginErrors().subscribe(error => {
               this.errorMessage = error;
          });
	}

}