import { Component, OnInit } from '@angular/core';
import { LooUser } from '../looUser';
import { AuthenticationService } from '../authentication.service';
import { LOOSERS } from '../mock-looUsers'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //constructor(private authenticationService: AuthenticationService) { }
  constructor() { }
  looUser: LooUser;

  ngOnInit() {
    this.looUser = new LooUser(); 
  }

  onSubmit(){
    //this.authenticationService.login(this.looUser).subscribe();
    console.log(this.looUser);
  }

}
