// Import angular components
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import 3rd party
import { MasonryModule } from 'angular2-masonry';

// Import components
import { AppComponent } from './app-component/app.component';
import { PollCard } from './poll-card-component/poll-card.component';
import { HomeComponent } from './home-component/home.component';

// Import services
import { PollCardService } from './poll-card-component/poll-card.service';

@NgModule({
  imports: [ 
    BrowserModule,
    MasonryModule 
  ],
  declarations: [ 
    AppComponent,
    PollCard,
    HomeComponent,
  ],
  providers: [
    PollCardService,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }