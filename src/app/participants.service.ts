import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import * as $ from 'jquery';

const participants = [
    {
        "name": "Abdalmajid Abdalla",
        "total_cont": 7,
        "username": "majidsd"
    },
    {
        "name": "Amr Abd Alkrim Hassan",
        "total_cont": 28,
        "username": "wizmoori"
    },
    {
        "name": "Ameenah",
        "total_cont": 7,
        "username": "ameenah"
    },
    {
        "name": "emanjodoo",
        "total_cont": 0,
        "username": "emanjodoo"
    },
    {
        "name": "Eman saeed",
        "total_cont": 0,
        "username": "emansaeed"
    },
    {
        "name": "Ibrahim Omer",
        "total_cont": 10,
        "username": "ibrahimomer"
    },
    {
        "name": "Majid CJ",
        "total_cont": 3,
        "username": "majid-cj"
    },
    {
        "name": "mohannad waheed",
        "total_cont": 25,
        "username": "mohannadprogrammer"
    },
    {
        "name": "Montaser",
        "total_cont": 0,
        "username": "montaz7"
    },
    {
        "name": "Obay Hamed",
        "total_cont": 3,
        "username": "obayhamed"
    },
    {
        "name": "ProjectDeveloper323",
        "total_cont": 0,
        "username": "ProjectDeveloper323"
    },
    {
        "name": "RehamElhadi",
        "total_cont": 1,
        "username": "RehamElhadi"
    },
    {
        "name": "Trteel",
        "total_cont": 0,
        "username": "Tarteel"
    },
    {
        "name": "wiamosman",
        "total_cont": 0,
        "username": "wiamosman"
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
