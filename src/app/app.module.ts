import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PlayersComponent } from './pages/players/players.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { UrgentCardComponent } from './components/urgent-card/urgent-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlayersComponent,
    HomepageComponent,
    UrgentCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
