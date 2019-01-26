import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule }  from '@angular/common/http';

import { AppComponent } from './app.component';
import { SiteComponent } from './site/site.component';
import { ReviewComponent } from './review/review.component';
import { LooComponent } from './loo/loo.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './/app-routing.module';

import { AuthenticationService } from './authentication.service';
import { AuthorizationInterceptorService } from './authorization-interceptor.service';
import { UnauthorizedInterceptorService } from './unauthorized-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
   AppComponent,
	 SiteComponent,
	 LooComponent,
	 RegisterComponent
  ],
  imports: [
    BrowserModule,
	  FormsModule,
    HttpClientModule,
	  AppRoutingModule
  ],
  providers: [
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptorService,
      multi: true
    },
    { provide: HTTP_INTERCEPTORS,
      useClass: UnauthorizedInterceptorService,
      multi: true
    }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
