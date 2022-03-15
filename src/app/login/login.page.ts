import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { RegisterPage } from '../register/register.page';
import { LoginPageForm } from './login.page.form';
import { AuthApiService } from './../service/api.authService';



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
  private submit: JSON;

  constructor(
    private router: Router,  // this component is using the router
    private formBuilder: FormBuilder, 
    private AuthApiService: AuthApiService
  ) {}
  // constructor(public afAuth: AngularFireAuth) { }


  ngOnInit() {
    // Create form as soon as page is initialized --> have to create inside ngOnInIt() 
    this.form = new LoginPageForm(this.formBuilder).createForm();
  }

  login(){
    if(!this.form.valid) {
      console.log("Invalid registration");
    } 
    else {
      console.log(this.form.value);
      let outcome = this.AuthApiService.localLogin(JSON.stringify(this.form));
      if(outcome){
        this.router.navigate(['tabs']);      
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

  toGoogle(){
    this.email = "hello@gmail.com";
    this.agent = "Google"
    //this.router.navigate(['external-register', {state:{email: this.email, agent: this.agent}}]);
    this.router.navigateByUrl('/external-register', {state: {email: this.email, agent: this.agent}})
  }

  toFacebook(){
    this.email = "hello@gmail.com"
    this.agent = "Facebook"
    //this.router.navigate(["external-register", {state:{email: this.email, agent: this.agent}}]);
    this.router.navigateByUrl('/external-register', {state: {email: this.email, agent: this.agent}})

  }
}
