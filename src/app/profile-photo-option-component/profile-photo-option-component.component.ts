import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profile-photo-option-component',
  templateUrl: './profile-photo-option-component.component.html',
  styleUrls: ['./profile-photo-option-component.component.scss'],
})
export class ProfilePhotoOptionComponentComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss(null, 'backdrop');
  }
  startCapture(type) {
    this.modalController.dismiss(type, 'select');
  }

}
