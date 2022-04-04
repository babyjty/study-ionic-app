import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from '../app-routing.module';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { SpotPageRoutingModule } from './spot-routing.module';

import { SpotPage } from './spot.page';

describe('SpotPage', () => {
  let component: SpotPage;
  let fixture: ComponentFixture<SpotPage>;
  let router: Router;
  let place_id: string;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SpotPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule, AppRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SpotPage);
    router = TestBed.get(Router)

    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should go to spot details when click spot card", () => {
    spyOn(router, 'navigate');

    component.goToDetailsPage(place_id);

    expect(router.navigate).toHaveBeenCalledWith(['spot-details']);
  })

});
