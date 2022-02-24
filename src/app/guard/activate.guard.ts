import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MessageComponent } from '../components/message/message.component';
import { AddProvider } from '../services/add'

@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate {
   constructor (public addProvider:AddProvider,private router: Router, public dialog: MatDialog) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.addProvider.isUserLoggedIn == true) {
      return true;
    }
    else {
      this.getpermission();
    }
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
