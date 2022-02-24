import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtherInfoComponent } from './other-info.component';


const routes: Routes = [
  {
    path: '',
    component: OtherInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherInfoRoutingModule { }
