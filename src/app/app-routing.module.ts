import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent} from './pages/contactus/contactus.component';
import { ProjectComponent } from './pages/project/project.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ActivateGuard } from './guard/activate.guard'
import { ActivatechildguardGuard } from './guard/activatechildguard.guard'
import { SettingComponent } from './pages/setting/setting.component';
import { AddUserComponent } from './pages/setting/add-user/add-user.component';
const routes: Routes = [

  {
    path:'home',
    component:HomeComponent
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'otherInfo',
    loadChildren: () => import('./pages/other-info/other-info.module').then(m => m.OtherInfoModule)
  },
  {
    path:'projects', 
    loadChildren: () => import('./pages/project/project.module').then(m => m.ProjectModule)
  },
  {
    path:'contactus',
    loadChildren: () => import('./pages/contactus/contactus.module').then(m => m.ContactusModule)
  },

  // {
  //   path:'setting',
  //   component:SettingComponent, canActivateChild:[ActivatechildguardGuard],
  //   children:[
  //   {
  //     path:'addUser',
  //     component:AddUserComponent
  //   },
  // ]},

  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'', redirectTo: '/home', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
