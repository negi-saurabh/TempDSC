import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent} from './register/register.component';
import { FindLooComponent} from './find-loo/find-loo.component';
import { CheckinLooComponent } from './checkin-loo/checkin-loo.component'
import { LoginComponent } from './login/login.component';
import { ReviewComponent } from './review/review.component';
import { LogoutComponent } from './logout/logout.component';
import { LooComponent } from './loo/loo.component';
import { AppComponent } from './app.component';
import { SiteComponent } from './site/site.component';

const routes : Routes =[
//  {path : 'AppComponent', component: AppComponent},
  {path : 'register', component: RegisterComponent},
  {path : 'find-loo', component: FindLooComponent},
  {path : 'checkin-loo', component: CheckinLooComponent},
  {path : 'login', component: LoginComponent},
  {path : 'review', component: ReviewComponent},
  {path : 'logout', component: LogoutComponent},
  {path : 'site', component: SiteComponent},
  {
        path: 'register', component: CheckinLooComponent,
        children: [{ path: '', component: RegisterComponent }]
  },
  {
        path: 'login', component: CheckinLooComponent,
        children: [{ path: '', component: LoginComponent }]
  },{path : 'loo', component: LooComponent}
//  {path : '', redirectTo : '/AppComponent', pathMatch : 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule ]
})

export class AppRoutingModule { }
export const routingComponents = [FindLooComponent,RegisterComponent,CheckinLooComponent,LoginComponent,ReviewComponent,LogoutComponent,LooComponent,SiteComponent]
