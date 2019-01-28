import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent} from './register/register.component';
import { FindLooComponent} from './find-loo/find-loo.component';
import { CheckinLooComponent } from './checkin-loo/checkin-loo.component'
import { LoginComponent } from './login/login.component';
import { ReviewComponent } from './review/review.component';

import { AppComponent } from './app.component';

const routes : Routes =[
//  {path : 'AppComponent', component: AppComponent},
  {path : 'register', component: RegisterComponent},
  {path : 'find-loo', component: FindLooComponent},
  {path : 'checkin-loo', component: CheckinLooComponent},
  {path : 'login', component: LoginComponent},
  {path : 'review', component: ReviewComponent}
//  {path : '', redirectTo : '/AppComponent', pathMatch : 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule ]
})

export class AppRoutingModule { }
export const routingComponents = [FindLooComponent,RegisterComponent,CheckinLooComponent,LoginComponent,ReviewComponent]
