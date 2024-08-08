import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./app.state";
import { restaurantReducer } from "./restaurant/restaurant.reducer";

export const reducers: ActionReducerMap<AppState> = {
    restaurants: restaurantReducer
}