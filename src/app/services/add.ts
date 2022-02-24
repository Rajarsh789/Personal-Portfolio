import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of } from 'rxjs';

@Injectable()
export class AddProvider {
    isUserLoggedIn: boolean = false;
    userName: any
    userId: string;
    password: string;
    name: string;
    email: string;
    emailId: string;
    passwordId: string
    hostAddress = ""

    constructor(public http: HttpClient, private cookie: CookieService,) { }

    login(email: string, password: string): Observable<any> {
        this.emailId = this.cookie.get("email");
        this.passwordId = this.cookie.get("password");
        this.userName = this.cookie.get("name");
        localStorage.setItem('email', this.email)
        localStorage.setItem('password', this.password)
        this.isUserLoggedIn = email == this.emailId && password == this.passwordId;
        localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false");
        return of(this.isUserLoggedIn).pipe(
        );
    }

    logout(): void {
        this.userName = ""
        localStorage.removeItem('email');
        localStorage.removeItem('password')
        this.isUserLoggedIn = false;
        localStorage.removeItem('isUserLoggedIn');
        this.cookie.deleteAll();
    }

    signUp(reqBody): Observable<any> {
        this.cookie.set("name", reqBody.name);
        this.cookie.set("email", reqBody.email);
        this.cookie.set("password", reqBody.password);
        this.name = this.cookie.get("name");
        this.emailId = this.cookie.get("email");
        this.passwordId = this.cookie.get("password");
        return reqBody;
    }

    contactUs(req) {
        return new Promise((resolve, reject) => {
            this.http.post(`${this.hostAddress}`, req).subscribe((resp: any) => {
                if (resp.status == true) {
                    resolve(resp);
                }
                else {
                    reject(resp);
                }
            })
        })

    }
}

