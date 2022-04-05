import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfilePhotoOptionComponentComponent } from './profile-photo-option-component.component';

describe('ProfilePhotoOptionComponentComponent', () => {
  let component: ProfilePhotoOptionComponentComponent;
  let fixture: ComponentFixture<ProfilePhotoOptionComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePhotoOptionComponentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfilePhotoOptionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
