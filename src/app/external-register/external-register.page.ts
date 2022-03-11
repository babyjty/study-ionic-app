import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExternalRegisterPageForm } from './external-register.page.form';

@Component({
  selector: 'app-external-register',
  templateUrl: './external-register.page.html',
  styleUrls: ['./external-register.page.scss'],
})
export class ExternalRegisterPage implements OnInit {
  
  extRegisterForm: ExternalRegisterPageForm;
  isSubmitted = false;
  email: String;
  agent: String;

  constructor(private router: Router, private formbuilder: FormBuilder) {
    console.log(this.email = this.router.getCurrentNavigation().extras.state.email.toLowerCase());
    console.log(this.agent = this.router.getCurrentNavigation().extras.state.agent);
  }

  ngOnInit() {
    this.createForm();
  }

  register(){
    this.isSubmitted = true;
    if(!this.extRegisterForm.getForm().valid) {
      console.log("Invalid registration")
    } else {
      console.log(this.extRegisterForm.getForm().value)
    }
    this.router.navigate(['tabs']);
  }

  private createForm(){
    this.extRegisterForm = new ExternalRegisterPageForm(this.email, this.agent, this.formbuilder)
  }
}
