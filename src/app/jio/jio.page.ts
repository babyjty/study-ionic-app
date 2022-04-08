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

  // For users to view more in depth jio details 
  viewJio(jio1) {
    this.router.navigateByUrl('/jio-details-accept', {state: {jio: jio1}});
  }

  // To load content from database whenever the user enters the page
  ionViewWillEnter(){
    try{
      this.jioApiService.getJios().subscribe((dataJ) => {
        this.jioList = dataJ;
        console.log(this.jioList);
      })
    } catch (error) {console.log(error)}
  }
}
