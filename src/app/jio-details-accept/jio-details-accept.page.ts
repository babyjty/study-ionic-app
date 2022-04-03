import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jio-details-accept',
  templateUrl: './jio-details-accept.page.html',
  styleUrls: ['./jio-details-accept.page.scss'],
})
export class JioDetailsAcceptPage implements OnInit {

  constructor(private route: Router) { }

  nextpage() {
    this.route.navigate(['/jio-list']);
  }

  ngOnInit() {
  }

}

 // jios = [
  //   {
  //     message: 'Message 1';,
 //      name: 'Name 1';,
  //     address: 'Address 1';,
  //     contact: 'Contact 1';,
  //     closing: 'Closing 1';,
  //     opening: 'Opening 1';
  //     crowedness: 'Crowedness 1';
  //     description: 'Description 1';,
  //     photo: 'Photo 1';,
  //   }
  // ]
