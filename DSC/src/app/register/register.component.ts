import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { LooUser } from '../looUser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    constructor(private authenticationService: AuthenticationService) { }

    looUser: LooUser;

    ngOnInit() {
      this.looUser = new LooUser();
    }

    onSubmit(){
      this.authenticationService.registerCustomer(this.looUser).subscribe();
    }
}
