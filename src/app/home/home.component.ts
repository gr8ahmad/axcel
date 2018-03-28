import {MediaMatcher} from '@angular/cdk/layout';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	private isAdmin = false;
	private currentUser: string;
	constructor(private authService: AuthService){}
  ngOnInit() {
	this.isAdmin = this.authService.isAuthunticated();
  }
}
