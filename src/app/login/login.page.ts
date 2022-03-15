import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { RegisterPage } from '../register/register.page';
import { LoginPageForm } from './login.page.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private router: Router, private formBuilder: FormBuilder) {} // this component is using the router
  // constructor(public afAuth: AngularFireAuth) { }
  form: FormGroup;
  email: String;
  agent: String;
  isSubmitted = false;

  ngOnInit() {
    // Create form as soon as page is initialized --> have to create inside ngOnInIt() 
    this.form = new LoginPageForm(this.formBuilder).createForm();
  }

  login(){
    this.router.navigate(['tabs']);
    this.isSubmitted = true;
    if(!this.form.valid) {
      console.log("Invalid registration")
    } else {
      console.log(this.form.value)
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
