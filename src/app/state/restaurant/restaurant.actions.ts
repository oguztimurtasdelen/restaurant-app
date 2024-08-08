import { createAction, props } from "@ngrx/store";
import { RestaurantModel } from "../../models/restaurant.model";
import { StoreModel } from "src/app/models/store.model";

export const loadRestaurants = createAction('[Restaurant List] Load Restaurants', props<{skip: number, limit: number}>());
export const loadRestaurantsSuccess = createAction('[Restaurant List] Load Restaurants Success', props<{restaurants: RestaurantModel[]}>());
export const loadRestaurantsFailure = createAction('[Restaurant List] Load Restaurants Failure', props<{error: any}>());

export const loadRestaurantDetails = createAction('[Restaurant Details] Load Restaurant Details', props<{ id: string }>());
export const loadRestaurantDetailsSuccess = createAction('[Restaurant Details] Load Restaurant Details Success', props<{ restaurantDetails: StoreModel }>());
export const loadRestaurantDetailsFailure = createAction('[Restaurant Details] Load Restaurant Details Failure', props<{ error: any }>());