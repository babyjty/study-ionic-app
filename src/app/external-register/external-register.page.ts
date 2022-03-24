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

  ngOnInit() {
    this.createForm();
  }

  async extRegister(){
    console.log('external-register')
    this.isSubmitted = true;
    if(!this.extRegisterForm.getForm().valid) {
      console.log("Invalid registration")
    } else {
      console.log(this.extRegisterForm.getForm().value)
      try{
        let outcome = await this.authApiService.extRegister(this.extRegisterForm.getForm().value).subscribe(
          async dataR => {
            console.log(dataR);
            if(dataR.success){
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

  private createForm(){
    console.log(this.email, this.provider, this.providerID, "createForm")
    this.extRegisterForm = new ExternalRegisterPageForm(this.email, this.provider, this.providerID, this.formbuilder)
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
