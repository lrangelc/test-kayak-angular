import { Component, Input, OnInit } from '@angular/core';
import { Airline } from 'src/app/core/models/airline.interface';

@Component({
  selector: 'app-airline-grid-tile',
  templateUrl: './airline-grid-tile.component.html',
  styleUrls: ['./airline-grid-tile.component.scss']
})
export class AirlineGridTileComponent implements OnInit {

  @Input() airline:Airline = {
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
