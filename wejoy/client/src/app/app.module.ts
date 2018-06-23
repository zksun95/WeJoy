import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { EventsDisplayComponent } from './components/events-display/events-display.component';
import { EventsDetailComponent } from './components/events-detail/events-detail.component';

import { GetEventsService } from './services/get-events.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    EventsDisplayComponent,
    EventsDetailComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    {
      provide: "get_events",
      useClass: GetEventsService
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
