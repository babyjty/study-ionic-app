import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthApiService } from './service/api.authService';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private authApiService: AuthApiService, private router: Router) {}
  
  logout(){
    sessionStorage.clear();
    try{
      this.authApiService.logout().subscribe(dataL =>{
        if(dataL.logoutSuccess){ this.router.navigate(['login'])
      }
      });

    } catch(error){console.log(error)}
  }
}
