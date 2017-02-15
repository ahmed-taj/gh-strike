import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import * as $ from 'jquery';

const participants = [
  {
    'username': 'majidsd',
    'total_cont': 9,
    'name': 'Abdalmajid Abdalla'
  },
  {
    'username': 'wizmoori',
    'total_cont': 28,
    'name': 'Amr Abd Alkrim Hassan'
  },
  {
    'username': 'ameenah',
    'total_cont': 8,
    'name': 'Ameenah'
  },
  {
    'username': 'emanjodoo',
    'total_cont': 0,
    'name': 'emanjodoo'
  },
  {
    'username': 'emansaeed',
    'total_cont': 0,
    'name': 'Eman saeed'
  },
  {
    'username': 'ibrahimomer',
    'total_cont': 10,
    'name': 'Ibrahim Omer'
  },
  {
    'username': 'majid-cj',
    'total_cont': 7,
    'name': 'Majid CJ'
  },
  {
    'username': 'mohannadprogrammer',
    'total_cont': 26,
    'name': 'mohannad waheed'
  },
  {
    'username': 'montaz7',
    'total_cont': 0,
    'name': 'Montaser'
  },
  {
    'username': 'obayhamed',
    'total_cont': 3,
    'name': 'Obay Hamed'
  },
  {
    'username': 'ProjectDeveloper323',
    'total_cont': 0,
    'name': 'ProjectDeveloper323'
  },
  {
    'username': 'RehamElhadi',
    'total_cont': 1,
    'name': 'RehamElhadi'
  },
  {
    'username': 'Tarteel',
    'total_cont': 0,
    'name': 'Trteel'
  },
  {
    'username': 'wiamosman',
    'total_cont': 0,
    'name': 'wiamosman'
  }
];


import { Participant } from './participant';


@Injectable()
export class ParticipantsService {

  constructor(private http: Http) { }

  getParticipants(): Promise<Participant[]> {
    return Promise.resolve(participants.sort(this.compare));
  }
  compare(a, b) {
    if (a.total_cont > b.total_cont) {
      return -1;
    } else if (a.total_cont < b.total_cont) {
      return 1;
    } else {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      }
      return 0;
    }
  }
}
