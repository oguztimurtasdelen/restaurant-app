import { createReducer, on } from "@ngrx/store";
import { RestaurantModel } from "../../models/restaurant.model";
import * as RestaurantActions from './restaurant.actions'
import { StoreModel } from "src/app/models/store.model";

export interface RestaurantState {
    list: RestaurantModel[];
    selectedRestaurant: StoreModel;
    error: string | null;
}

const initialState: RestaurantState = {
    list: [],
    selectedRestaurant: <StoreModel>{},
    error: null
};

export const restaurantReducer = createReducer(
    initialState,
    on(RestaurantActions.loadRestaurantsSuccess, (state, {restaurants}) => ({...state, list: [...state.list, ...restaurants]})),
    on(RestaurantActions.loadRestaurantsFailure, (state, { error }) => ({ ...state, error })),
    on(RestaurantActions.loadRestaurantDetailsSuccess, (state, { restaurantDetails }) => ({ ...state, selectedRestaurant: restaurantDetails })),
    on(RestaurantActions.loadRestaurantDetailsFailure, (state, { error }) => ({ ...state, error }))
)