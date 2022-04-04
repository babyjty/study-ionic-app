import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JioApiService } from '../service/jio-api.service';

@Component({
  selector: 'app-jio',
  templateUrl: 'jio.page.html',
  styleUrls: ['jio.page.scss']
})
export class JioPage implements OnInit {

  constructor(private router: Router, private jioApiService: JioApiService) { }

  private jioList: any;
  
  ngOnInit(){
    try{
      this.jioApiService.getJios().subscribe((dataJ) => {
        this.jioList = dataJ;
        console.log(this.jioList);
      })
    } catch (error) {console.log(error)}
  }

  viewJio(jio) {
    this.router.navigateByUrl('/jio-details-accept', {state: {jio1: jio}});
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