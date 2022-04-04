import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jio-details-accept',
  templateUrl: './jio-details-accept.page.html',
  styleUrls: ['./jio-details-accept.page.scss'],
})
export class JioDetailsAcceptPage implements OnInit {

  private jio;
  constructor(private router: Router) {
    // console.log(this.jio = this.router.getCurrentNavigation().extras.state.jio);
  }

  nextpage() {
    this.router.navigate(['/jio-list']);
  }

  ngOnInit() {
  }

  
  private bio = sessionStorage.getItem("bio")
  private pic = sessionStorage.getItem("pic")
  private username = sessionStorage.getItem('username')

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
