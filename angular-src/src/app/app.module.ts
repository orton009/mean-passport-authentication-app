import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule , Routes} from '@angular/router' ;
import {FormsModule} from '@angular/forms' ;
import {HttpModule} from '@angular/http' ;

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import {FlashMessagesModule , FlashMessagesService} from 'angular2-flash-messages' ;

//services import
import {AuthService} from './services/auth.service' ;
import {AuthGuard} from './guards/auth.guard' ;


const appRoutes : Routes = [
  {path : '' , component : HomeComponent} ,
  {path : 'login' , component : LoginComponent} ,
  {path : 'dashboard' , component : DashboardComponent  ,canActivate : [AuthGuard]},
  {path : 'profile' , component : ProfileComponent, canActivate : [AuthGuard]} ,
  {path : '*' , component : HomeComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule ,
    HttpModule ,
    FormsModule ,
    RouterModule.forRoot(appRoutes) ,
    FlashMessagesModule ,
  ],
  providers: [AuthService , FlashMessagesService  , AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
