import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { JioApiService } from '../service/jio-api.service';

@Component({
  selector: 'app-jio',
  templateUrl: 'jio.page.html',
  styleUrls: ['jio.page.scss']
})
export class JioPage implements OnInit {

  constructor(private router: Router, private jioApiService: JioApiService,
    private actionSheetController: ActionSheetController) { }

  private jioList: any;
  private datetime: string; 
  public filteredLocations:any;

  orderHeader: String = '';
  isDescOrder: boolean = true;
  
  ngOnInit(){
    try{
      this.jioApiService.getJios().subscribe((dataJ) => {
        this.jioList = dataJ;
        console.log(this.jioList);
      })
    } catch (error) {console.log(error)}
  }
  createJio(){
    this.router.navigate(['/create-jio'])
  }

  viewJio(jio1) {
    this.router.navigateByUrl('/jio-details-accept', {state: {jio: jio1}});
  }

  // SORTING

  // SORTING


  sort(headerName: String) {
    this.isDescOrder = !this.isDescOrder;
    this.orderHeader = headerName; 
  }

  async sorting() {

    const actionSheet = await this.actionSheetController.create({
      header: 'SORT BY',
      buttons: [{
        text: 'Date & Time',
        handler: () => {
          this.sort('jio_date_time.formatted');
        }
      },{
        text: 'Rating',
        handler: () => {
          this.sort('location.rating');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    // console.log('onDidDismiss resolved with role and data', role, data);

  }

  // FILTERING

  async filtering() {

    const actionSheet = await this.actionSheetController.create({
      header: 'FILTER BY',
      buttons: [{
        text: 'Rating',
        handler: () => {
          // this.filter('rating',function(value: number) {return value >3});
          this.filteringRating();
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    // console.log('onDidDismiss resolved with role and data', role, data);

  }

  async filteringRating() {

    const actionSheet = await this.actionSheetController.create({
      header: 'FILTER BY RATING',
      buttons: [{
        text: 'Above 4/5',
        data: 10,
        handler: () => {
          this.filteredLocations = this.jioList.filter(item=>{
            if (item.rating >= 4.0){
              return item;
            }
          })
        }
      }, {
        text: 'Above 3/5',
        data: 'Data value',
        handler: () => {
          this.filteredLocations = this.jioList.filter(item=>{
            if (item.rating >= 3.0){
              return item;
            }
          })
        }
      }, {
        text: 'ALL',
        handler: () => {
          this.filteredLocations = this.jioList.filter(item=>{
            if (item.rating >= 0.0){
              return item;
            }
          })
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    // console.log('onDidDismiss resolved with role and data', role, data);

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

  