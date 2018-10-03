import { Component, OnInit, Input } from '@angular/core';
import { Participant } from '../../models/participant.model';
import { trigger, transition, style, animate, query, stagger, keyframes } from '@angular/animations';

@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({ height: "0px", overflow: 'hidden', }), { optional: true }),
        query(':enter', stagger('50ms', [
          animate('0.1s ease-in', keyframes([
            style({ height: "0px" }),
            style({ height: '*' }),
          ]))]), { optional: true }),
        query(':leave', animate('0.1s ease-in', keyframes([
          style({ height: '*' }),
          style({ height: "0px" }),
        ])), { optional: true }),
      ])
    ]),
  ]
})
export class ParticipantListComponent implements OnInit {

  constructor() { }
  @Input() participants: Participant[]
  get partSort() {
    return this.participants.sort((a, b) => a.ready < b.ready ? 1 : -1)
  }

  ngOnInit() {

  }

}
