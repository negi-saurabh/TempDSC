import { Component, OnInit } from '@angular/core';
import { LooUser } from '../looUser';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { LOOSERS } from '../mock-looUsers'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,private router:Router) { }

  looUser: LooUser;
  username : String;

  ngOnInit() {

    //this.looUser = new LooUser();
    this.username = localStorage.getItem('username');

  }

  onSubmit(){
     var response=this.authenticationService.login(this.looUser).subscribe();
     this.router.navigate(['/']);
     //let accessToken=localStorage.getItem('accessToken');
     //var response=this.authenticationService.getUser().subscribe();
    }



}
