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
  links = [
    {
      title: 'Open Source Guides - By GitHub',
      href: 'https://opensource.guide/'
    },
    {
      title: 'Understanding the GitHub Flow - GitHub Guides',
      href: 'https://guides.github.com/introduction/flow/'
    },
    {
      title: 'How getting into Open Source has been awesome for me - By Kent C. DoddsFollow',
      href: 'https://medium.com/@kentcdodds/how-getting-into-open-source-has-been-awesome-for-me-8480cd756a80'
    },
    {
      title: '10 Ways to contribute to an open source project without writing code - By Heiko W. Rupp',
      href: 'https://opensource.com/life/13/10/ten-ways-open-source-projects'
    },
    {
      title: 'I want to get involved!',
      href: 'http://up-for-grabs.net/'
    },
  ];

  constructor(private serv: ParticipantsService) {

  }
  ngOnInit() {
    this.serv.getParticipants()
      .then(list => this.participants = list)
      .catch(err => console.log(err));

  }
}
