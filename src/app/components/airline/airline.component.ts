import { Component, Input, OnInit } from '@angular/core';

import { Airline } from './../../models/airline.interface';

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.scss']
})
export class AirlineComponent implements OnInit {

  CONTENT_CDN = 'https://content.r9cdn.net';

  ONEWORLD_VALUE = 'OW';
  SKY_TEAM_VALUE = 'ST';
  STAR_ALLIANCE_VALUE = 'SA';

  @Input()
  airline: Airline = {
    site: '',
    code: '',
    alliance: '',
    phone: '',
    name: '',
    usName: null,
    __clazz: '',
    defaultName: null,
    logoURL: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
