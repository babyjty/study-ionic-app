import { Component, OnInit } from '@angular/core';
import { ProfileApiService } from '../service/profile-api.service';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  private profile: any;

  ngOnInit(){

  }
  constructor(private profileApiService: ProfileApiService) {}

}
