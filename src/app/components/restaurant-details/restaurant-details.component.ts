import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { loadRestaurantDetails } from "../../state/restaurant/restaurant.actions";
import { Observable } from "rxjs";
import { RestaurantModel } from "../../models/restaurant.model";
import { AppState } from "../../state/app.state";
import { StoreModel } from 'src/app/models/store.model';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss'],
})
export class RestaurantDetailsComponent  implements OnInit {
  _restaurant: RestaurantModel = <RestaurantModel>{};
  restaurantDetails: Observable<StoreModel>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.restaurantDetails = store.select(state => state.restaurants.selectedRestaurant);
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.store.dispatch(loadRestaurantDetails({id}));

    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state && navigation.extras.state['restaurant']) {
      this._restaurant = navigation.extras.state['restaurant'];
    }
  }
  
  isRestaurantClosed(workingHours: Array<{day: number, open: string, close: string, closed: boolean}>): {day: number, open: string, close: string, closed: boolean} {
  if (workingHours) {
    const numericDayOfWeek = (new Date().getDay() === 0) ? 7 : new Date().getDay();
    return workingHours[numericDayOfWeek] || {day: 0, open: '', close: '', closed: false};
  } else return {day: 0, open: '', close: '', closed: false};
  
  

    
  }

}
