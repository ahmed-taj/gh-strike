import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import * as $ from 'jquery';

const participants = [
  {
    'total_cont': 0,
    'name': 'Abdalmajid Abdalla',
    'username': 'majidsd'
  },
  {
    'total_cont': 2,
    'name': 'Amr Abd Alkrim Hassan',
    'username': 'wizmoori'
  },
  {
    'total_cont': 0,
    'name': 'Ameenah',
    'username': 'ameenah'
  },
  {
    'total_cont': 0,
    'name': 'emanjodoo',
    'username': 'emanjodoo'
  },
  {
    'total_cont': 0,
    'name': 'Eman saeed',
    'username': 'emansaeed'
  },
  {
    'total_cont': 1,
    'name': 'Ibrahim Omer',
    'username': 'ibrahimomer'
  },
  {
    'total_cont': 0,
    'name': 'Majid CJ',
    'username': 'majid-cj'
  },
  {
    'total_cont': 14,
    'name': 'mohannad waheed',
    'username': 'mohannadprogrammer'
  },
  {
    'total_cont': 0,
    'name': 'Montaser',
    'username': 'montaz7'
  },
  {
    'total_cont': 0,
    'name': 'Obay Hamed',
    'username': 'obayhamed'
  },
  {
    'total_cont': 0,
    'name': 'ProjectDeveloper323',
    'username': 'ProjectDeveloper323'
  },
  {
    'total_cont': 1,
    'name': 'RehamElhadi',
    'username': 'RehamElhadi'
  },
  {
    'total_cont': 0,
    'name': 'Trteel',
    'username': 'Tarteel'
  },
  {
    'total_cont': 0,
    'name': 'wiamosman',
    'username': 'wiamosman'
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
