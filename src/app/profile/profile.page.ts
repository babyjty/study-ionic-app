import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { loadingController } from '@ionic/core';
import { AuthApiService } from '../service/api.authService';
import { ProfileApiService } from '../service/profile-api.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  private username: any;
  private worklevel: any;
  private bio: any;
  private profilepic: any;
  private telegram: any;

  constructor() { }

  ngOnInit() {
    this.username = sessionStorage.getItem('username')
    this.worklevel = sessionStorage.getItem('worklevel');
    this.bio = sessionStorage.getItem('bio');
    this.profilepic = sessionStorage.getItem('profilepic');
    this.telegram = sessionStorage.getItem('telegram');
  }



}
