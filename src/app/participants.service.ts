import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import * as $ from 'jquery';

import { Participant } from './participant';


@Injectable()
export class ParticipantsService {
  participants = [
    { 'name': 'Trteel', 'total_cont': 0, 'username': 'Tarteel' },
    { 'name': 'Amr Abd Alkrim Hassan', 'total_cont': 2, 'username': 'wizmoori' },
    { 'name': 'Ameenah', 'total_cont': 0, 'username': 'ameenah' },
    { 'name': 'Majid CJ', 'total_cont': 0, 'username': 'majid-cj' },
    { 'name': 'Obay Hamed', 'total_cont': 0, 'username': 'obayhamed' },
    { 'name': 'Ibrahim Omer', 'total_cont': 1, 'username': 'ibrahimomer' },
    { 'name': 'Montaser', 'total_cont': 0, 'username': 'montaz7' },
    { 'name': 'Abdalmajid Abdalla', 'total_cont': 0, 'username': 'majidsd' },
    { 'name': 'Eman saeed', 'total_cont': 0, 'username': 'emansaeed' },
    { 'name': 'wiamosman', 'total_cont': 0, 'username': 'wiamosman' },
    { 'name': 'emanjodoo', 'total_cont': 0, 'username': 'emanjodoo' },
    { 'name': 'mohannad waheed', 'total_cont': 14, 'username': 'mohannadprogrammer' },
    { 'name': 'ProjectDeveloper323', 'total_cont': 0, 'username': 'ProjectDeveloper323' }
  ];

  constructor(private http: Http) { }

  getParticipants(): Promise<Participant[]> {
    return Promise.resolve(this.participants.sort(this.compare));
  }
  compare(a, b) {
    if (a.total_cont > b.total_cont) {
      return -1;
    } else if (a.total_cont < b.total_cont) {
      return 1;
    } else {
      return 0;
    }
  }
}
