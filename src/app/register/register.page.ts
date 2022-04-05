import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
// import { ApiService } from './../../service/api.service';
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
    // private ngZone: ngZone,
    // private apiService: ApiService
  ) {}
    // this.mainForm();

  photo = "https://i.pravatar.cc/150";
  // submit = false;

  async openOptionSelection() {
    const modal = await this.modalController.create({
      component: ProfilePhotoOptionComponentComponent,
      // cssClass: ‘transparent-modal’
    });

    modal.onDidDismiss()
    .then(res => {
      console.log(res);
      if (res.role !== 'backdrop') {
        this.takePicture(res.data);
      }
    });
    return await modal.present();
  }

  async takePicture(type) {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source: CameraSource[type]
    });
    this.photo = image.webPath;
    console.log("photo " + this.photo);
  }


  registerForm: RegisterPageForm;
  isSubmitted = false;
  ngOnInit() {
    this.createForm();
  }

  async register(){
    console.log('external-register')
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


  private createForm() {
    this.registerForm = new RegisterPageForm(this.formBuilder);
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
