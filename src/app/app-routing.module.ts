import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes : Routes = [
  {path:'',component:LandingComponent},
  {path:'admin',component:AdminLayoutComponent,children:[
    {path:'',loadChildren:() => import('./admin/dashboard/dashboard.module').then(m => m.DashboardModule)},
    {path:'dashboard',loadChildren:() => import('./admin/dashboard/dashboard.module').then(m => m.DashboardModule)},
    {path:'allusers',loadChildren:() => import('./admin/allusers/allusers.module').then(m => m.AllusersModule)},
    {path:'adduser',loadChildren:() => import('./admin/adduser/adduser.module').then(m => m.AdduserModule)},
    {path:'userdetails/:id',loadChildren:() => import('./admin/userdetails/userdetails.module').then(m => m.UserdetailsModule)},
  ]},
  {path:'login',component:LoginUserComponent},
  {path:'signup',component:SignUpComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
