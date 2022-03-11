import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
// import { ApiService } from './../../service/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { RegisterPageForm } from './register.form';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  constructor(
    private router: Router, 
    private formBuilder: FormBuilder,
    // private ngZone: ngZone,
    // private apiService: ApiService
  ) { 
    // this.mainForm();
  }
  // submit = false;

  registerForm: RegisterPageForm;
  isSubmitted = false;
  ngOnInit() {
    this.createForm();
  }

  register(){
    this.isSubmitted = true;
    if(!this.registerForm.getForm().valid) {
      console.log("Invalid registration")
    } else {
      console.log(this.registerForm.getForm().value)
    }
    this.router.navigate(['tabs']);
  }

  // register2(){
  //   if(!this.registerForm.getForm().valid) {
  //     console.log("Invalid registration")
  //   } else {
  //     if(window.confirm("Are you sure?")){
  //       let id = this.actRoute.snapshot.paramMap.get('id');
  //       this.apiService.register(id, )
  //     }
  //       this.isSubmitted = true;
  //       console.log(this.registerForm.getForm().value)
  //   }
  //   this.router.navigate(['tabs']);
  // }


  private createForm() {
    this.registerForm = new RegisterPageForm(this.formBuilder);
  }


}
