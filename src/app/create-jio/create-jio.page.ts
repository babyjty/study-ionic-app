import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { CreateJioPageForm } from './create-jio.page.form';
import { JioApiService } from '../service/jio-api.service';
import { AlertController } from '@ionic/angular';
import { formatPercent } from '@angular/common';
import { format, parseISO } from 'date-fns';
import { fromEventPattern } from 'rxjs';


@Component({
  selector: 'app-create-jio',
  templateUrl: './create-jio.page.html',
  styleUrls: ['./create-jio.page.scss'],
})
export class CreateJioPage implements OnInit {

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private jioApiService: JioApiService,
    private alertController: AlertController
  ) {}

  jioForm: CreateJioPageForm;
  
  private location: any;
  private showCal = false;
  private dateValue = format(new Date(), 'yyyy-MM-dd');
  private formattedString = '';
  private googleid: any;

  private locationImage: string;
  
  ngOnInit() {
    this.createForm();
    this.location = this.router.getCurrentNavigation().extras.state.location
    this.googleid = this.router.getCurrentNavigation().extras.state.googleid
    console.log(this.location)
    if(this.location.result.src === null){this.locationImage = 'assets/img/StudyJioLogo.png'}
    else{this.locationImage = this.location.result.src}


    this.jioForm.getForm().get('jioLocation').setValue(this.location.result.name, {onlyself: true})
    this.jioForm.getForm().get('jioAddress').setValue(this.location.result.formatted_address, {onlyself: true})
    this.jioForm.getForm().get('jioRating').setValue(this.location.result.rating, {onlyself: true})
    this.jioForm.getForm().get('jioImage').setValue(this.locationImage, {onlyself: true})
    this.jioForm.getForm().get('googleid').setValue(this.googleid, {onlyself: true})
  }

  setToday(){
    this.formattedString = format(parseISO(format(new Date(), 'yyyy-MM-dd')), 'MMM d, yyyy, HH:mm')
  }

  dateChanged(value){
    console.log(value);
    this.formattedString = format(parseISO(value), 'MMM d, yyyy, HH:mm')
    this.showCal = false;
    this.jioForm.getForm().get('datetimestring').setValue(this.formattedString, {onlyself: true})
  }

  formatDate(value){
    return format(parseISO(value), 'MMM d, yyyy, HH:mm');
  }

  createJio(){


    console.log(this.jioForm.getForm().value)
    try{
      this.jioApiService.createJio(this.jioForm.getForm().value).subscribe((dataJ) => {
        if(dataJ.createSuccess){
          this.presentAlert('Jio Successfully Created', "Jio is successfully created. Save the date!")
          this.router.navigate(['tabs'])
          console.log(dataJ)
        }
        else
        {
          this.presentAlert('Unsuccessful Jio Creation', 'Try again later');
          this.router.navigate(['tabs/spot'])
          console.log(dataJ)
        }
      }
    )} catch(error){console.log(error)}
  }

  private createForm() {
    this.jioForm = new CreateJioPageForm(this.formBuilder);
    let date = new Date().toISOString()
    console.log(date)
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
