import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import * as $ from 'jquery';

const participants = [
    {
        "total_cont": 0,
        "username": "majidsd",
        "name": "Abdalmajid Abdalla"
    },
    {
        "total_cont": 2,
        "username": "wizmoori",
        "name": "Amr Abd Alkrim Hassan"
    },
    {
        "total_cont": 2,
        "username": "ameenah",
        "name": "Ameenah"
    },
    {
        "total_cont": 0,
        "username": "emanjodoo",
        "name": "emanjodoo"
    },
    {
        "total_cont": 0,
        "username": "emansaeed",
        "name": "Eman saeed"
    },
    {
        "total_cont": 8,
        "username": "ibrahimomer",
        "name": "Ibrahim Omer"
    },
    {
        "total_cont": 3,
        "username": "majid-cj",
        "name": "Majid CJ"
    },
    {
        "total_cont": 19,
        "username": "mohannadprogrammer",
        "name": "mohannad waheed"
    },
    {
        "total_cont": 0,
        "username": "montaz7",
        "name": "Montaser"
    },
    {
        "total_cont": 3,
        "username": "obayhamed",
        "name": "Obay Hamed"
    },
    {
        "total_cont": 0,
        "username": "ProjectDeveloper323",
        "name": "ProjectDeveloper323"
    },
    {
        "total_cont": 1,
        "username": "RehamElhadi",
        "name": "RehamElhadi"
    },
    {
        "total_cont": 0,
        "username": "Tarteel",
        "name": "Trteel"
    },
    {
        "total_cont": 0,
        "username": "wiamosman",
        "name": "wiamosman"
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
