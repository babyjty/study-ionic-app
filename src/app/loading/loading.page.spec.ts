import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { LoadingPage } from './loading.page';

describe('LoadingPage', () => {
  let component: LoadingPage;
  let fixture: ComponentFixture<LoadingPage>;
  let router: Router; // declare router variable of type router 

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingPage ],
      imports: [IonicModule.forRoot(), AppRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LoadingPage);

    // Instantiating the router
    router = TestBed.get(Router); // TestBed gets an instance of a service or component 

    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to login page after load', fakeAsync(() => { // test is not waiting on a async call
    spyOn(router, 'navigate');
    component.ngOnInit();
    tick(1500); // wait a second and a half before going to expect instruction
    expect(router.navigate).toHaveBeenCalledWith(['login']);
  }));
});
