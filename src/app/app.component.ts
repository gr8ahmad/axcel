import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './auth/auth.service';
import { DataStorageService } from './shared/data-storage.service' 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
	constructor(private authService: AuthService,
              private dataStorageService: DataStorageService) {}
	ngOnInit() {
		 firebase.initializeApp({
    apiKey: "AIzaSyCeANvV5M0we5Y1E4Il01A2D6hITDGYKWw",
    authDomain: "portfolio-db-b3c6e.firebaseapp.com"
    });
     this.dataStorageService.getProjects();
	}
}
