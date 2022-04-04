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

  private profileForm: FormGroup;
  private profile: any;

  constructor(
    private profileApiService: ProfileApiService,
    private authApiService: AuthApiService,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  async ngOnInit() {
    // await this.getProfile();
    // console.log(this.profileForm.get('username'))
    // console.log(this.profile + ": profile")
    try{
      await this.profileApiService.getProfile().subscribe( async dataP => {
        this.profile = await dataP;
        console.log(dataP)
      });
    } catch(error){
      console.log(error);
    }
    console.log(this.profile)
  }


  async getProfile(){

  }

  show(){
    console.log(this.profile)
  }
}
