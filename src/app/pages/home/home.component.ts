import { Component, OnInit ,HostListener} from '@angular/core';
import { MatDialog } from '@angular/material';
import { MessageComponent } from '../../components/message/message.component';
import { AddProvider } from '../../../../src/app/services/add';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  panelOpenState = false;
  panelOpenState1 = false;
  showScroll: boolean;
  showScrollHeight = 300;
  hideScrollHeight = 10;
  viewType = 0;
  leftCurly = '{';
  rightCurly = '}';
  constructor(public addProvider :AddProvider,public dialog: MatDialog) { }


  ngOnInit() {
    AOS.init({
      offset:100,
    });

    
  }

  @HostListener('window:scroll', [])
  onWindowScroll() 
  {
    if (( window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > this.showScrollHeight) 
    {
        this.showScroll = true;
    } 
    else if ( this.showScroll && (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) < this.hideScrollHeight) 
    { 
      this.showScroll = false; 
    }
  }

  scrollToTop() 
    { 
      (function smoothscroll() 
      { var currentScroll = document.documentElement.scrollTop || document.body.scrollTop; 
        if (currentScroll > 0) 
        {
          window.requestAnimationFrame(smoothscroll);
          window.scrollTo(0, currentScroll - (currentScroll / 5));
        }
      })();
  }
 

  changeView(i) {
    this.viewType = i;
  }

}
