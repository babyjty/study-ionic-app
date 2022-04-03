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
    this.profileForm = this.formBuilder.group({
      username:[''],
      telegram: [''],
      worklevel: [''],
      bio: ['']
    })

    await this.getProfile();
    console.log(this.profileForm.get('username'))
    console.log(this.profile + ": profile")

  }


  async getProfile(){
    try{
      let userid = localStorage.getItem('userID')
      console.log(userid)
      let str = '{"userid":' + userid + '}'  
      console.log(str)
      const obj = JSON.parse(str)
      console.log(obj.userid)
      await this.profileApiService.getProfile().subscribe(dataP => {
        this.profile = dataP;
        // this.profileForm.setValue({username: dataP.username, telegram: dataP.telegram, worklevel: dataP.worklevel, bio: dataP.bio})
        localStorage.setItem("profile", dataP)
        console.log(dataP)
      });


    } catch(error){
      console.log(error);
    }
  }

}
