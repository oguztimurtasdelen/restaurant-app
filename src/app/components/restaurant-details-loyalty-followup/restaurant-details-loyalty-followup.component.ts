import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-details-loyalty-followup',
  templateUrl: './restaurant-details-loyalty-followup.component.html',
  styleUrls: ['./restaurant-details-loyalty-followup.component.scss'],
})
export class RestaurantDetailsLoyaltyFollowupComponent  implements OnInit {
  loyaltyCount: number = 5;
  loyaltyArr: number[] = Array(this.loyaltyCount).fill(0).map((_, i) => i + 1);

  constructor() { }

  ngOnInit() {}

}
