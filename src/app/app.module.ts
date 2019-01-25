import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { SiteComponent } from './site/site.component';
import { ReviewComponent } from './review/review.component';
import { LooComponent } from './loo/loo.component';

@NgModule({
  declarations: [
    AppComponent,
	SiteComponent,
	LooComponent
  ],
  imports: [
    BrowserModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
