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
  private length = 0;
  private isJioer: boolean;

  // public myJios = [
  //   {
  //     title: "test title",
  //     description: "test description",
  //     location: "test location",
  //     datetime: "test date time",
  //     duration: "test duration",
  //     status: "Pending"
  //   }
  // ]

  ngOnInit() {
    this.jioApiService.getMyJio().subscribe(dataMJ => {
      try{
        console.log("MY JIOS");
        if (dataMJ.findSuccess === undefined){
          this.jios = dataMJ;
        }
        else{
          this.jios = [];
        }
        // this.length = dataMJ.length();
        // console.log(dataMJ.length());
        console.log(dataMJ)
        console.log("x:" + this.jios)

        if (this.jios.length > 0){
          this.jioApiService.isJioer(this.jios[0]).subscribe(dataIJ => {
            try{
              console.log("ISJior");
              this.isJioer = dataIJ.isjioer;
            } catch(error) {console.log(error)}
            
          })
        }

      } catch(error) {console.log(error)}
    })

    
  }


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

  async presentAlert(h, b){
    const alert = await this.alertController.create({
      header: h,
      subHeader: b,
      buttons: ['Dismiss']
    });
    await alert.present();
  }





}
  // deleteJio(jio){
  //   this.jioApiService.deleteJio(jio).subscribe(dataC => {
  //     if(dataC.result){
  //       console.log('Jio Cancelled');
  //       this.presentAlert('Jio Cancelled', 'Sad to see you go :(')
  //     }
  //     else{
  //       console.log('Jio Cancel Unsuccesful');
  //       this.presentAlert('Jio Cancel Unsuccessful', 'Please try again')
  //     }
  //   })
  // }

  // async presentAlert(h, b){
  //   const alert = await this.alertController.create({
  //     header: h,
  //     subHeader: b,
  //     buttons: ['Dismiss']
  //   });
  //   await alert.present();
  // }


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