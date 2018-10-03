import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StompRService } from "@stomp/ng2-stompjs";
import { StoreModule } from '@ngrx/store';
import { participantReducer } from './store/participant.store';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule, MatListModule, MatIconModule, MatDividerModule, MatBadgeModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ParticipantListComponent } from './components/participant-list/participant-list.component';
import { ParticipantService } from './services/participant.service';
import { HttpClientModule } from '@angular/common/http';
import { ParticipantItemComponent } from './components/participant-list/participant-item/participant-item.component';
@NgModule({
  declarations: [
    AppComponent,
    ParticipantListComponent,
    ParticipantItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatBadgeModule,
    MatIconModule,
    BrowserAnimationsModule,

    FlexLayoutModule,
    StoreModule.forRoot({ participants: participantReducer })
  ],
  providers: [
    StompRService,
    ParticipantService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
