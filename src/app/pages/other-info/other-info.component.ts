import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { MessageComponent } from '../../../../src/app/components/message/message.component';
import { AddProvider } from '../../../../src/app/services/add';
import * as AOS from 'aos';
@Component({
  selector: 'app-other-info',
  templateUrl: './other-info.component.html',
  styleUrls: ['./other-info.component.scss']
})
export class OtherInfoComponent implements OnInit {

  constructor(public addProvider: AddProvider,public dialog: MatDialog,private router: Router,) { }

  ngOnInit() {
    console.log("other compoent");
    AOS.init();
    // this.getpermission();
  }

  getpermission() {
    if (this.addProvider.isUserLoggedIn == true) {
    } else {
      this.openDialog();
      this.router.navigate(['/home']);
    }
  }

  openDialog() {
    this.dialog.open(MessageComponent);
  }

  

}
