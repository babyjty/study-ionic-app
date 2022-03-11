import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss'],
})
export class LocationCardComponent implements OnInit {

  @Input() image: number;
  @Input() name: string;
  @Input() address: string;
  @Input() distanceFromUser: string;
  @Input() price: number;
  @Input() busy: number;

  constructor() { }

  ngOnInit() {}

}
