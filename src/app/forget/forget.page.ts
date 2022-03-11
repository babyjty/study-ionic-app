import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgetPageForm } from './forget.page.form';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.page.html',
  styleUrls: ['./forget.page.scss'],
})
export class ForgetPage implements OnInit {
  constructor(
    private router: Router, 
    private formBuilder: FormBuilder,
    // private ngZone: ngZone,
    // private apiService: ApiService
  ) { 
    // this.mainForm();
  }
  // submit = false;

  forgetForm: ForgetPageForm;
  isSubmitted = false;
  ngOnInit() {
    this.createForm();
  }

  confirm(){
    this.isSubmitted = true;
    if(!this.forgetForm.getForm().valid) {
      console.log("Invalid email")
    } else {
      console.log(this.forgetForm.getForm().value)
    }
    this.router.navigate(['loading']);
  }

  private createForm() {
    this.forgetForm = new ForgetPageForm(this.formBuilder)
  }
}
