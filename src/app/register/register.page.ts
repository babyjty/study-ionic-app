import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { RegisterPageForm } from './register.form';
import { AuthApiService } from '../service/api.authService';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import {Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ProfilePhotoOptionComponentComponent } from '../profile-photo-option-component/profile-photo-option-component.component';
// const { Camera } = Plugins;

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  constructor(
    private router: Router, 
    private formBuilder: FormBuilder,
    private authApiService: AuthApiService,
    private alertController: AlertController,
    private modalController: ModalController,
  ) {}

  private registerForm: RegisterPageForm;
  private isSubmitted = false;
  photo = "https://lh3.googleusercontent.com/PxYZd_6SRthIuCC1OvPnpNFTA5zGvyv7woU2o_g-5xrtwwhT5H6KFe4ZZYZMXjrOAyZ_1xLkOzILkw5T2HybxxliuF2l-cDqbckEFg=w600";

  // To open modal (slide up component) when the profile image is tapped.
  async openOptionSelection() {
    const modal = await this.modalController.create({
      component: ProfilePhotoOptionComponentComponent,
    })

    modal.onDidDismiss()
    .then(res => {
        this.usePicture(sessionStorage.getItem("dp_url"));
    });
    return await modal.present();
  }

  // To set user selected image as the confirmed image 
  // url: image url to be stored in the database upon registration
  async usePicture(url: any) {
    console.log("url: " + url);
    this.photo = url;
  }


  // To create register form upon page initialization
  ngOnInit() {
    this.createForm();
  }

  // To register for a local account with StudyJio 
  // This function can only be run after all fields in registerForm are filled as per requirement
  async register(){
    console.log('external-register')
    this.registerForm.getForm().get('photoURL').setValue(this.photo, {onlyself: true})
    this.isSubmitted = true;
    if(!this.registerForm.getForm().valid) {
      console.log("Invalid registration")
    } else {
      console.log(this.registerForm.getForm().value)
      try{
        await this.authApiService.verifyAccount(this.registerForm.getForm().value).subscribe(async (dataA) => {
          if (dataA.result) {
            await this.presentAlert('Unsuccessful Registration', "Email already registered with StudyJio");
            this.router.navigate(['login']);
            return;
          }
          else{
            await this.authApiService.register(this.registerForm.getForm().value).subscribe(
              async dataR => {
                console.log(dataR);
                if(await dataR.success){
                  localStorage.setItem('userID', JSON.stringify(dataR.userID));
                  this.presentAlert('Registration Successful', 'Hi '+ this.registerForm.getForm().get('username').value + "! Enjoy your StudyJio experience" )
                  this.router.navigate(['tabs'])
                }
                else{
                  await this.presentAlert('Unsuccessful Registration', dataR.message)
                  this.router.navigate(['login'])
                }
              }
            )
          } 
          }
        )} catch(error){console.log(error)}
    }
  }

  // Creates form upon page initialization 
  private createForm() {
    this.registerForm = new RegisterPageForm(this.formBuilder);
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
