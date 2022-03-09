import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-external-registration',
  templateUrl: './external-registration.page.html',
  styleUrls: ['./external-registration.page.scss'],
})
export class ExternalRegistrationPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  register(){
    this.router.navigate(['tabs']);
  }
}
