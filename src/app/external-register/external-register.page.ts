import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExternalRegisterPageForm } from './external-register.page.form';
import { AuthApiService } from './../service/api.authService';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-external-register',
  templateUrl: './external-register.page.html',
  styleUrls: ['./external-register.page.scss'],
})
export class ExternalRegisterPage implements OnInit {
  
  extRegisterForm: ExternalRegisterPageForm;
  isSubmitted = false;
  email: String;
  provider: String;
  providerID: String;

  constructor(
    private router: Router, 
    private formbuilder: FormBuilder, 
    private authApiService: AuthApiService,
    private alertController: AlertController
  ) {
    console.log(this.email = this.router.getCurrentNavigation().extras.state.email.toLowerCase());
    console.log(this.provider = this.router.getCurrentNavigation().extras.state.provider);
    console.log(this.providerID = this.router.getCurrentNavigation().extras.state.providerID);
  }

  // Creates new form upon page initialization
  ngOnInit() {
    this.createForm();
  }

  // extRegister for first time user registration using Google/Facebook to input additional required details for profile.
  async extRegister(){
    console.log('external-register')
    this.isSubmitted = true;
    if(!this.extRegisterForm.getForm().valid) {
      console.log("Invalid registration")
    } else {
      console.log(this.extRegisterForm.getForm().value)
      try{
        await this.authApiService.register(this.extRegisterForm.getForm().value).subscribe(
          async dataR => {
            console.log(dataR);
            if(dataR.success){
              localStorage.setItem('userID', JSON.stringify(dataR.userID));
              this.presentAlert('Registration Successful', 'Hi '+ this.extRegisterForm.getForm().get('username').value + "! Enjoy your StudyJio experience" )
              this.router.navigate(['tabs'])
            }
            else{
              await this.presentAlert('Unsuccessful Registration', dataR.message)
              this.router.navigate(['login'])
            }
          }
        )
      } catch(error) {console.log(error)}
    }
    this.router.navigate(['tabs']);
  }

  // createForm to create ExternalRegisterPageForm when the page is initialized.
  private createForm(){
    console.log(this.email, this.provider, this.providerID, "createForm")
    this.extRegisterForm = new ExternalRegisterPageForm(this.email, this.provider, this.providerID, this.formbuilder)
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
