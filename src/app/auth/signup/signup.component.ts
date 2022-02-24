import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AddProvider } from '../../../../src/app/services/add';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  name: string;
  email: string;
  password: string;
  submitted = false;
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private cookie: CookieService, public addProvider: AddProvider, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    var reqBody = {
      name: this.registerForm.value.name,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    }
    this.addProvider.signUp(reqBody);
    console.log(reqBody, "is");
    if (reqBody) {
      this.router.navigate(['/login']);
    }
  }


  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}

  // onClickSubmit() {
  //   var reqBody = {
  //     name: this.signUpForm.value.name,
  //     email: this.signUpForm.value.email,
  //     password: this.signUpForm.value.password
  //   }
  //   this.addProvider.signUp(reqBody)
  //   // .subscribe(data => {
  //   //   console.log("Is Login Success: " + data);
  //   //   if (data) this.router.navigate(['/home']);
  //   // });
  // }

  // convenience getter for easy access to form fields

