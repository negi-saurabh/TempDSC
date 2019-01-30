import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule }  from '@angular/common/http';

import { AppComponent } from './app.component';



import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule, routingComponents } from './/app-routing.module';
import { AuthenticationService } from './authentication.service';
import { SiteService } from './site.service';
import { ReviewService } from './review.service';
import { AuthorizationInterceptorService } from './authorization-interceptor.service';
import { UnauthorizedInterceptorService } from './unauthorized-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
   AppComponent,
	 routingComponents,
  ],
  imports: [
    BrowserModule,
	  FormsModule,
    HttpClientModule,
	  AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAYbsD8Sm84onWydEWjM_oMFkq_kum8Oq0' // This is a ggoglemaps API key.
    })
  ],
  providers: [
    ReviewService,
    SiteService,
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
export class AppModule {}
