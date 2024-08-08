import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { loadRestaurants } from "../../state/restaurant/restaurant.actions";
import { RestaurantModel } from "../../models/restaurant.model";
import { AppState } from "../../state/app.state";
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { UserModel } from 'src/app/models/user.model';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss'],
})
export class RestaurantListComponent implements OnInit {
  restaurants: Observable<RestaurantModel[]>;
  skip = 0;
  limit = 15;
  userInfo: UserModel = <UserModel>{}

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {
    this.restaurants = store.select(state => state.restaurants.list);
  }

  ngOnInit() {
    this.loadMoreRestaurants();
  }

  loadMoreRestaurants(event?: any) {
    this.store.dispatch(loadRestaurants({skip: this.skip, limit: this.limit}));
    this.skip += this.limit;
    if(event) {
      // To see <ion-infinite-scroll> component works or not
      setTimeout(() => {
        (event as InfiniteScrollCustomEvent).target.complete();
      }, 2000);

    }
  }

  onRestorantDetails(restaurant: RestaurantModel) {
    const navigationExtras: NavigationExtras = {
      state: {
        restaurant: restaurant
      }
    };

    this.router.navigate(['/restaurant-details', restaurant.storeInfo.id], navigationExtras)
  }

}
