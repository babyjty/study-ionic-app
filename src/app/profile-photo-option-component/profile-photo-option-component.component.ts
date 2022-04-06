import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profile-photo-option-component',
  templateUrl: './profile-photo-option-component.component.html',
  styleUrls: ['./profile-photo-option-component.component.scss'],
})
export class ProfilePhotoOptionComponentComponent implements OnInit {

  constructor(private modalController: ModalController, private router:Router) { }

  

  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss(null, 'backdrop');
  }
  selectPhoto(url) {
    // sendURLtobackend;
    console.log("sending URL to the back: ", url) 
    sessionStorage.setItem("dp_url", url);
  }

}
