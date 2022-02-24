import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddProvider } from '../../../../src/app/services/add';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn: boolean = false;
  title: string;
  navbarOpen = false;
  constructor(public addProvider: AddProvider, private router: Router) { }

  ngOnInit() {
    console.log(this.addProvider.userName);
  }

  logout() {
    this.addProvider.logout();
    this.router.navigate(['/home']);
  }


  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  toggleNavbar1() {
    this.navbarOpen = !this.navbarOpen;
  }

}
