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

  // To get the state of the router when the router navigation first reaches the jio-details-accept page.
  // jio state includes the details of the individual jio selected on the jio page 
  ngOnInit() {
    this.jio = this.router.getCurrentNavigation().extras.state.jio;
    console.log("this jio")
    console.log(this.jio)
  }

  // acceptJio to enable users without existing "Jio" to indicate their participation in the "Jio"
  acceptJio(){
    try{
      this.jioApiService.acceptJio(this.jio).subscribe(dataA => {
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

  // Presents alert whenever a confirmation or warning has to be informed to user.
  // h: Header of alert
  // b: Body of alert
  async presentAlert(h, b){
    const alert = await this.alertController.create({
      header: h,
      subHeader: b,
      buttons: ['Dismiss']
    });
    await alert.present();
  }
}