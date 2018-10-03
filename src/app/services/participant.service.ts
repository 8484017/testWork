import { Injectable, isDevMode } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { StompRService } from '@stomp/ng2-stompjs';
import { Store, select } from '@ngrx/store';
import { ParticipantAction } from '../store/participant.store';
import { Participant } from '../models/participant.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  constructor(
    private _stomp: StompRService,
    private _store: Store<ParticipantAction>,
    private http: HttpClient
  ) { }
  private _subscription$: Subscription

  getParticipants(): Observable<Participant[]> {
    this.http.get<Participant[]>("http://89.223.27.70/participants").subscribe(s => this._store.dispatch<ParticipantAction>({ type: "PARTICIPANT_ADD_RANGE", message: s as any }))
    return this._store.pipe(select("participants"))
  }

  connectSocket() {
    if (this._subscription$) return
    this._stomp.config = {
      url: 'ws://89.223.27.70/ws',
      debug: isDevMode() ? true : false,
      heartbeat_in: 0,
      headers: {},
      heartbeat_out: 20000,
      reconnect_delay: 5000
    }
    this._stomp.initAndConnect()
    this._subscription$ = this._stomp.subscribe('/topic/messages').subscribe(s => {
      let message = JSON.parse(s.body)
      this._store.dispatch<ParticipantAction>({ type: message.messageType, message: message })
    })
  }


  disconnectSocket() {
    this._subscription$.unsubscribe()
    this._stomp.disconnect()
  }

}
