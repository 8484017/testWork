import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ParticipantService } from './services/participant.service';
import { Participant } from './models/participant.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private _participantService: ParticipantService,
  ) { }

  private participants$: Subscription
  participants: Participant[]
  ngOnInit(): void {
    this.participants$ = this._participantService.getParticipants().subscribe(s => this.participants = s)
    this._participantService.connectSocket()
  }

  ngOnDestroy(): void {
    this._participantService.disconnectSocket()
    this.participants$.unsubscribe()
  }
}
