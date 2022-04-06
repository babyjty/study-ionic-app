import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { JioApiService } from '../service/jio-api.service';

@Component({
  selector: 'app-jio-details-accept',
  templateUrl: './jio-details-accept.page.html',
  styleUrls: ['./jio-details-accept.page.scss'],
})
export class JioDetailsAcceptPage implements OnInit {

  private jio: any;
  constructor(
    private router: Router,
    private alertController: AlertController,
    private jioApiService: JioApiService,
  ) {}

  ngOnInit() {
    this.jio = this.router.getCurrentNavigation().extras.state.jio;
    console.log("this jio")
    console.log(this.jio)
  }

  acceptJio(){
    try{
      this.jioApiService.acceptJio().subscribe(dataA => {
        if(dataA.outcome){
          console.log('Within Accept Jio: Accept Success');
          this.presentAlert('Jio Accepted', 'Save the date');
          this.router.navigate(['/jio-list']);
        }
        else{
          console.log('Within Accept Jio: Accept Failed');
          this.presentAlert('Unsuccessful Acceptance', 'Please try again.')
          this.router.navigate(['/jio-list']);
        }
      })
    } catch(error){console.log(error)}
  }

  async presentAlert(h, b){
    const alert = await this.alertController.create({
      header: h,
      subHeader: b,
      buttons: ['Dismiss']
    });
    await alert.present();
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
