import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent} from './register/register.component';

import { AppComponent } from './app.component';

const routes : Routes =[
//  {path : 'AppComponent', component: AppComponent},
  {path : 'register', component: RegisterComponent}
//  {path : '', redirectTo : '/AppComponent', pathMatch : 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule ]
})

export class AppRoutingModule { }
