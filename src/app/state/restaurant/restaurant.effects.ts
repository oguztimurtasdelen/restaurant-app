import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of, pipe } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { RestaurantService } from "../restaurant.service";
import * as RestaurantActions from "./restaurant.actions"

@Injectable()
export class RestaurantEffects {
    loadRestaurants$ = createEffect(() => this.actions$.pipe(
        ofType(RestaurantActions.loadRestaurants),
        mergeMap(action => this.restaurantService.getFeed(action.skip, action.limit).pipe(
            map(restaurants => RestaurantActions.loadRestaurantsSuccess({restaurants})),
            catchError(error => of(RestaurantActions.loadRestaurantsFailure({error})))
        ))
    ));

    loadRestaurantDetails$ = createEffect(() => this.actions$.pipe(
        ofType(RestaurantActions.loadRestaurantDetails),
        mergeMap(action => this.restaurantService.getStoreInfo(action.id).pipe(
            map(restaurantDetails => RestaurantActions.loadRestaurantDetailsSuccess({restaurantDetails})),
            catchError(error => of(RestaurantActions.loadRestaurantDetailsFailure({error})))
        ))
    ))

    constructor(
        private actions$: Actions,
        private restaurantService: RestaurantService
    ) {}
}