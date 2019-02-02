import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { LooUser } from '../looUser';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

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
      this.resetForm();
    }

    resetForm(form?: NgForm) {
        if (form != null)
          form.reset();
        this.looUser = {
          username: '',
          email: '',
          password: '',
          id: ''
        }
      }
      OnSubmit(form: NgForm) {
        this.authenticationService.register(form.value).subscribe();




      /**OnSubmit(form: NgForm) {
        this.authenticationService.register(form.value)
          .subscribe((data: any) => {
            debugger
            if (data.Succeeded == true) {
              this.resetForm(form);
              console.log("Saurabh");
            }
            else{
              console.log("Negi");
            }
          });**/
      }
}
