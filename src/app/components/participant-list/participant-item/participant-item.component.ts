import { Component, OnInit, Input } from '@angular/core';
import { Participant } from '../../../models/participant.model';

@Component({
  selector: 'app-participant-item',
  templateUrl: './participant-item.component.html',
  styleUrls: ['./participant-item.component.scss'],
})
export class ParticipantItemComponent implements OnInit {

  constructor() { }
  @Input() item: Participant

  ngOnInit() {
  }

}
