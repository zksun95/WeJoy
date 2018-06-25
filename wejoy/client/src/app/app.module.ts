import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routes';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { EventsDisplayComponent } from './components/events-display/events-display.component';
import { EventsDetailComponent } from './components/events-detail/events-detail.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';


import { GetEventsService } from './services/get-events.service';
import { AuthService } from './services/auth.service';
import { UserHistoryComponent } from './components/user-history/user-history.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NewEventComponent } from './components/new-event/new-event.component';
import {importType} from "@angular/compiler/src/output/output_ast";

import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    EventsDisplayComponent,
    EventsDetailComponent,
    UserProfileComponent,
    UserHistoryComponent,
    HomePageComponent,
    NewEventComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: "get_events",
      useClass: GetEventsService
    }, {
      provide: "auth",
      useClass: AuthService
    } ],
  bootstrap: [AppComponent]
})

export class AppModule { }
