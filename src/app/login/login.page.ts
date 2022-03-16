import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { RegisterPage } from '../register/register.page';
import { LoginPageForm } from './login.page.form';
import { AuthApiService } from './../service/api.authService';
import { SocialUser, GoogleLoginProvider, FacebookLoginProvider, SocialAuthService } from 'angularx-social-login';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // Declare class variables
  private form: FormGroup;
  private email: String;
  private agent: String;
  private user: SocialUser
  protected loggedIn = false;

  constructor(
    private router: Router,  // this component is using the router
    private formBuilder: FormBuilder, 
    private AuthApiService: AuthApiService,
    private authService: SocialAuthService
  ) {}
  // constructor(public afAuth: AngularFireAuth) { }


  ngOnInit() {
    // Create form as soon as page is initialized --> have to create inside ngOnInIt() 
    this.form = new LoginPageForm(this.formBuilder).createForm();
     this.authService.authState.subscribe((user) => {
       localStorage.setItem('profile', JSON.stringify(user));
       this.user = user;
       this.loggedIn = (user != null);
    })
  }

  login(){
    if(!this.form.valid) {
      console.log("Invalid registration");
    } 
    else {
      console.log(this.form.value);
      let temp = this.form.getRawValue();
      console.log(temp);
      console.log("Login Start")
      let outcome = this.AuthApiService.localLogin(JSON.stringify(temp));
      console.log("Login Middle")

      console.log(outcome);
      if(outcome._isScalar){
        this.router.navigate(['tabs']);     
        console.log("Login End")
 
      }
      else {
        console.log("No such account");
        this.form = new LoginPageForm(this.formBuilder).createForm();
      }
    }
  }

  register(){
    this.router.navigate(['register']);
  }

  async toGoogle(){
   await this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data) => {
      localStorage.setItem('google_auth', JSON.stringify(data));
      console.log("inside")
      console.log(data)
    });
    if(this.user != null){
      console.log(this.user);
    }
    else {
      console.log('Invalid')
    }
    this.email = this.user.email;
    this.agent = this.user.provider;
    //this.router.navigate(['external-register', {state:{email: this.email, agent: this.agent}}]);
    this.router.navigateByUrl('/external-register', {state: {email: this.email, agent: this.agent}})
  }

  toFacebook(){
    this.email = "hello@gmail.com"
    this.agent = "Facebook"
    //this.router.navigate(["external-register", {state:{email: this.email, agent: this.agent}}]);
    this.router.navigateByUrl('/external-register', {state: {email: this.email, agent: this.agent}})

  }

  logOut() {
    this.authService.signOut();
  }

  googleLoginOptions = {
    scope:'profile email'
  }
}
