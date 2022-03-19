import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-jio-list',
  templateUrl: './jio-list.page.html',
  styleUrls: ['./jio-list.page.scss'],
})
export class JioListPage implements OnInit {

  constructor(private route: Router) { }

  orderHeader: String = '';
  isDescOrder: boolean = true;

  nextpage() {
    this.route.navigate(['/jio-details']);
  }

  nextpage2() {
    this.route.navigate(['/jio-form']);
  }

  nextpage1() {
    this.route.navigate(['/jio-details-pending']);
  }

  sort(headerName: String) {
    this.isDescOrder = !this.isDescOrder;
    this.orderHeader = headerName;
  }

  
  isenabled() {

  }

  ngOnInit() {
  }

}


// jioList = [
//     {
//       picture: 'Picture 1';
//       message: 'Message 1';
//       location: 'Location 1';
//       distance: 'Distance 1';
//       cost: 'Cost 1';
//       crowdedness: 'Crowdedness 1';
//     }
//   ]