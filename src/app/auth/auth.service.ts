import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject'
@Injectable()
export class AuthService {
	token: string;
	private loginErrorSubject = new Subject<string>();
	constructor(private router: Router) {}
signInUser(email: string, password: string) {
	firebase.auth().signInWithEmailAndPassword(email, password)
	.then(response=> {
		this.router.navigate(['/']);
          firebase.auth().currentUser.getToken()
            .then(
              (token: string) => this.token = token
            );
	})
	.catch(error => {
		this.loginErrorSubject.next(error);
		console.log(error)
	})
}
isAuthunticated() {
	return this.token != null;
}

public getLoginErrors():Subject<string> {
	return this.loginErrorSubject;
}
}