import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AddProvider } from '../../../../src/app/services/add';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  formData: FormGroup;
  loginForm: FormGroup;
  title:string;
  constructor(public addProvider: AddProvider, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(""),
      password: new FormControl(""),
    });
  }

  onClickSubmit(data: any) {
    this.email = data.email;
    this.password = data.password;
    this.addProvider.login(this.email, this.password)
      .subscribe(data => {
        console.log("Is Login Success: " + data);
        if (data) this.router.navigate(['/home']);
      });
  }

  get f() { return this.loginForm.controls; }



  onReset() {
    this.loginForm.reset();
  }

  kk(){
     this.title = "this is local storage";
    localStorage.setItem("token" , this.title);
  }
}
