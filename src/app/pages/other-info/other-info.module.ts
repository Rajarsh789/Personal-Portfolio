import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherInfoRoutingModule } from './other-info-routing.module';
import { OtherInfoComponent } from './other-info.component';

@NgModule({
  declarations: [
    OtherInfoComponent
  ],
  imports: [
    CommonModule,
    OtherInfoRoutingModule
  ],
})
export class OtherInfoModule { }
