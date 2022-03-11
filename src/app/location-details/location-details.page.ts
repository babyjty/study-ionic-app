import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.page.html',
  styleUrls: ['./location-details.page.scss'],
})
export class LocationDetailsPage implements OnInit {

  @Input() image: number;
  @Input() name: string;
  @Input() address: string;
  @Input() distanceFromUser: string;
  @Input() price: number;
  @Input() busy: number;

  constructor() { }

  ngOnInit() {
  }

}
