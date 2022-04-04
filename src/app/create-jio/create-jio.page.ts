import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { CreateJioPageForm } from './create-jio.page.form';
import { JioApiService } from '../service/jio-api.service';
import { AlertController } from '@ionic/angular';
import { formatPercent } from '@angular/common';
import { format, parseISO } from 'date-fns';


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
  ) { }

  jioForm: CreateJioPageForm;
  
  showCal = false;
  dateValue = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z';
  formattedString = '';
  
  ngOnInit() {
    this.createForm();
    console.log('hello')
    console.log(this.jioForm)
    console.log(localStorage.getItem("userID") + " : userID SART")
  }

  setToday(){
    this.formattedString = format(parseISO(format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z'), 'MMM d, yyyy, HH:mm')
  }

  dateChanged(value){
    console.log(value);
    this.formattedString = format(parseISO(value), 'MMM d, yyyy, HH:mm')
    this.showCal = false;
  }

  createJio(){
    console.log(this.jioForm.getForm().value)
    console.log(localStorage.getItem('userID') + " u")
    try{
      console.log("In TS: " + this.jioForm.getForm().value)
      this.jioApiService.createJio(this.jioForm.getForm().value).subscribe((dataJ) => {
        if(dataJ.createSuccess){
          this.presentAlert('Jio Successfully Created', "Jio is successfully created. Save the date!")
          //this.router.navigate(['tabs'])
        }
        else
        {
          this.presentAlert('Unsuccessful Jio Creation', 'Try again later');
          //this.router.navigate(['tabs/spot'])
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
