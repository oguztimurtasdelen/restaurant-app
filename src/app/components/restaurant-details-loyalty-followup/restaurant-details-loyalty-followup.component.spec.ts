import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestaurantDetailsLoyaltyFollowupComponent } from './restaurant-details-loyalty-followup.component';

describe('RestaurantDetailsLoyaltyFollowupComponent', () => {
  let component: RestaurantDetailsLoyaltyFollowupComponent;
  let fixture: ComponentFixture<RestaurantDetailsLoyaltyFollowupComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantDetailsLoyaltyFollowupComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurantDetailsLoyaltyFollowupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
