import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { JioApiService } from '../service/jio-api.service';



@Component({
  selector: 'app-jio-list',
  templateUrl: './jio-list.page.html',
  styleUrls: ['./jio-list.page.scss'],
})
export class JioListPage implements OnInit {

  constructor(
    private router: Router,
    private jioApiService: JioApiService,
    private alertController: AlertController
  ) { }

  private jio;

  ngOnInit() {
    this.jioApiService.getMyJio().subscribe(dataMJ => {
      this.jio = dataMJ;
    })
  }

  deleteJio(jio){
    this.jioApiService.deleteJio(jio).subscribe(dataC => {
      if(dataC.result){
        console.log('Jio Cancelled');
        this.presentAlert('Jio Cancelled', 'Sad to see you go :(')
      }
      else{
        console.log('Jio Cancel Unsuccesful');
        this.presentAlert('Jio Cancel Unsuccessful', 'Please try again')
      }
    })
  }

  async presentAlert(h, b){
    const alert = await this.alertController.create({
      header: h,
      subHeader: b,
      buttons: ['Dismiss']
    });
    await alert.present();
  }


  // orderHeader: String = '';
  // isDescOrder: boolean = true;

  // nextpage() {
  //   this.route.navigate(['/jio-details']);
  // }

  // nextpage2() {
  //   this.route.navigate(['/jio-form']);
  // }

  // nextpage1() {
  //   this.route.navigate(['/jio-details-pending']);
  // }

  // sort(headerName: String) {
  //   this.isDescOrder = !this.isDescOrder;
  //   this.orderHeader = headerName;
  // }

  
  // isenabled() {

  // }

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