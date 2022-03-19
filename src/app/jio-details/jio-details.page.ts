import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jio-details',
  templateUrl: './jio-details.page.html',
  styleUrls: ['./jio-details.page.scss'],
})
export class JioDetailsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // removeJio(jio){
  //   let index = this.jios.indexOf(jio);

  //   if(index > -1){
  //     this.jios.splice(index, 1);
  //   }
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