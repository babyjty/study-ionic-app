import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { CreateJioPageForm } from './create-jio.page.form';
import { JioApiService } from '../service/jio-api.service';
import { AlertController } from '@ionic/angular';
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
  ) {}

  jioForm: CreateJioPageForm;
  
  private location: any;
  private showCal = false;
  private dateValue = format(new Date(), 'yyyy-MM-dd');
  private formattedString = '';
  private googleid: any;
  private datetime: any;

  private locationImage: string;
  

  // Run on page initialization
  // Fetches the state of the router through the routerlink from the previous page
  // State stores the spot details of the spot being viewed
  ngOnInit() {
    this.createForm();
    this.location = this.router.getCurrentNavigation().extras.state.location
    this.googleid = this.router.getCurrentNavigation().extras.state.googleid
    console.log(this.location)
    if(this.location.result.src === null){this.locationImage = 'assets/img/StudyJioLogo.png'}
    else{this.locationImage = this.location.result.src}

    console.log(this.location.result.name + " LOCATION NAME")
    this.jioForm.getForm().get('jioLocation').setValue(this.location.result.name, {onlyself: true})
    this.jioForm.getForm().get('jioAddress').setValue(this.location.result.formatted_address, {onlyself: true})
    this.jioForm.getForm().get('jioRating').setValue(this.location.result.rating, {onlyself: true})
    this.jioForm.getForm().get('jioImage').setValue(this.locationImage, {onlyself: true})
    this.jioForm.getForm().get('googleid').setValue(this.googleid, {onlyself: true})
  }

  // Sets the default calendar upon tapping as current date time 
  setToday(){
    this.formattedString = format(parseISO(format(new Date(), 'yyyy-MM-dd')), 'MMM d, yyyy, HH:mm')
  }

  // Formats the datetime to datetime string appropriate for user view whenever a new date is selected
  // value: ISO datetime 
  dateChanged(value){
    console.log(value);
    this.formattedString = format(parseISO(value), 'MMM d, yyyy, HH:mm')
    this.showCal = false;
    this.jioForm.getForm().get('datetimestring').setValue(this.formattedString, {onlyself: true})
    this.datetime = value;
  }

  
  formatDate(value){
    return format(parseISO(value), 'MMM d, yyyy, HH:mm');
  }

  // Create Jio 
  // Checks if current datetime is greater than Jio datetime
  // Alert presented and Jio not created when current datetime > Jio datetime
  // If Jio datetime > current datetime Jio created if user does not have any existing Jio on the database.
  createJio(){
    let now = new Date()
    console.log(now)
    console.log(this.jioForm.getForm().get("datetime").toString())

    if(now > new Date(this.datetime)){
      this.presentAlert("Invalid Jio Creation", "Kindly key in date time greater than current.");
    }
    else{
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
            this.presentAlert('Unsuccessful Jio Creation', 'Do you have an existing jio?');
            this.router.navigate(['tabs/spot'])
            console.log(dataJ)
          }
        }
      )} catch(error){console.log(error)}
    }
  }

  // Creates CreateJioPageForm, to be conducted on page initialization
  // Form specifies the format and the fields required
  private createForm() {
    this.jioForm = new CreateJioPageForm(this.formBuilder);
    let date = new Date().toISOString()
    console.log(date)
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
