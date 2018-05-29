import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service' ;
import {Router} from '@angular/router' ;
import {FlashMessagesService} from 'angular2-flash-messages' ;
import {tokenNotExpired} from 'angular2-jwt' ;


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router : Router ,
    private authService : AuthService ,
    private flashMessage : FlashMessagesService
  ) { }

  ngOnInit() {
    //console.log(this.authService.isLoggedIn());
  }
 
  onLogOut(){
    this.authService.logout() ;
    this.flashMessage.show("You are Logged Out" , {
      cssClass : "alert-success" ,
      timeout : 3000
    });

    this.router.navigate(['login']);
  }

}
