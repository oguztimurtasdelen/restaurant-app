import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './state';

import { restaurantReducer } from './state/restaurant/restaurant.reducer';
import { RestaurantEffects } from './state/restaurant/restaurant.effects';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { WelcomeBarComponent } from './components/welcome-bar/welcome-bar.component';
import { RestaurantDetailsActionsComponent } from './components/restaurant-details-actions/restaurant-details-actions.component';
import { RestaurantDetailsLoyaltyFollowupComponent } from './components/restaurant-details-loyalty-followup/restaurant-details-loyalty-followup.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantListComponent,
    RestaurantDetailsComponent,
    SearchBarComponent,
    WelcomeBarComponent,
    RestaurantDetailsActionsComponent,
    RestaurantDetailsLoyaltyFollowupComponent,
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([RestaurantEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25})
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
