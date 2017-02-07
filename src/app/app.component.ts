import { Component, OnInit } from '@angular/core';
import { Participant } from './participant';
import { ParticipantsService } from './participants.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  participants = [];

  constructor(private serv: ParticipantsService) {

  }
  ngOnInit() {
    this.serv.getParticipants()
      .then(list => this.participants = list)
      .catch(err => console.log(err));

  }
}
