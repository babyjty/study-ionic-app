import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  ngOnInit() {
    // Create form as soon as page is initialized --> have to create inside ngOnInIt() 
    this.form = new LoginPageForm(this.formBuilder).createForm();
  }

  login(){
    this.router.navigate(['tabs']);
  }

  register(){
    this.router.navigate(['register']);
  }
}
