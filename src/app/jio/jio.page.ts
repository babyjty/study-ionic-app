import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { format, parseISO } from 'date-fns';
import { JioApiService } from '../service/jio-api.service';

@Component({
  selector: 'app-jio',
  templateUrl: 'jio.page.html',
  styleUrls: ['jio.page.scss']
})
export class JioPage implements OnInit {

  constructor(private router: Router, private jioApiService: JioApiService) { }

  private jioList: any;
  private datetime: string; 
  
  ngOnInit(){
    
  }
  createJio(){
    this.router.navigate(['/create-jio'])
  }

  viewJio(jio1) {
    this.router.navigateByUrl('/jio-details-accept', {state: {jio: jio1}});
  }

  ionViewWillEnter(){
    try{
      this.jioApiService.getJios().subscribe((dataJ) => {
        this.jioList = dataJ;
        console.log(this.jioList);
      })
    } catch (error) {console.log(error)}
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