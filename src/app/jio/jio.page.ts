import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jio',
  templateUrl: 'jio.page.html',
  styleUrls: ['jio.page.scss']
})
export class JioPage {

  constructor(private route: Router) { }

  nextpage() {
    this.route.navigate(['/jio-details-accept']);
  }
  createJio(){
    this.route.navigate(['/create-jio'])
  }

}

// cards = [
  //   {
  //     location: 'Location 1';,
  //     distance: 'Distance 1';,
  //     cost: 'Cost 1';,
  //     crowedness: 'Crowdedness 1';,
  //     message: 'Message 1';
  //     picture: 'Picture 1';
      

  //   }
  // ]