import { Component, Input, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @Input() dataIs;
  
  constructor() {
    
   }
  ngOnInit() {
    AOS.init();
    console.log("aaaaaaaaaaaaaaa");

  }

}
