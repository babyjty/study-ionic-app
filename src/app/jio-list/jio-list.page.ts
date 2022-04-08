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

  private jios: any;
  private isJioer: boolean;

  // Runs when the page is initialized
  // To load jios from the database associated to the logged in user
  ngOnInit() {
    try{
      this.jioApiService.getMyJio().subscribe(dataMJ => {
        console.log("MY JIOS");
        if (dataMJ.findSuccess === undefined){
          this.jios = dataMJ;
        }
        else{
          this.jios = [];
        }
        console.log(dataMJ)

        if (this.jios.length > 0){
          try{
            this.jioApiService.isJioer(this.jios[0]).subscribe(dataIJ => {
    
              console.log("ISJioer");
              this.isJioer = dataIJ.isjioer;
            })
          }catch(error) {console.log(error)}
    
    
          let today = new Date();
          let date = new Date(this.jios[0].jio_date_time.ISO)
          date.setHours(date.getHours() + this.jios[0].jio_duration)
    
          console.log(today);
          console.log(date);
          
          // To delete or withdraw from Jio if the date with duration has passed
          if(today > date){
            if(this.isJioer){
              try{
                this.jioApiService.deleteJio(this.jios[0]).subscribe(dataDJ => {
                  if(dataDJ.deleteSuccess) {this.jios = []}
              })
            } catch(error) {console.log(error)}
          }
            else {
              try{
                this.jioApiService.withdrawJio(this.jios[0]).subscribe(dataWJ => {
                  if(dataWJ.withdrawSuccess) {this.jios = []}
                })
              } catch(error) {console.log(error)}
            }
        }
      }

      })
    } catch(error) {console.log(error)}
  }


  // withdrawJio for Jioee to remove their participation from a "Jio".
  // jioDetails: all detailed information regarding the particular Jio including its unique identifier.
  withdrawJio(jioDetails){
    this.jioApiService.withdrawJio(jioDetails).subscribe(dataWJ =>{
      try{
        if(dataWJ.withdrawSuccess){
          this.presentAlert("Jio Withdrawal Success", "Sad to see you go.");
          this.router.navigate(['/tabs/map']);

        }
        else{
          this.presentAlert("Jio Withdrawal Failed", "Try again later.")
          this.router.navigate(['/tabs/map']);
        }
      } catch (error) {console.log(error)}
    })
  }

  // cancelJio for Jioer to remove the whole Jio from the database
  // jioDetails: all detailed information regarding the particular Jio including its unique identifier
  cancelJio(jioDetails){
    this.jioApiService.deleteJio(jioDetails).subscribe( dataCJ => {
      console.log(dataCJ)
      try{
        if(dataCJ.deleteSuccess){
          this.presentAlert("Jio Cancel Success", "Sad to see you go.");
          this.router.navigate(['/tabs/map']);
          console.log(dataCJ);
        }
        else{
          this.presentAlert("Jio Cancel Failed", "Try again later.")
          this.router.navigate(['/tabs/map']);
        }} catch(error) {console.log(error)}
        

    })
    
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
