import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { RestaurantListComponent } from "./components/restaurant-list/restaurant-list.component";
import { RestaurantDetailsComponent } from "./components/restaurant-details/restaurant-details.component";

const routes: Routes = [
  /*
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  */
  {
    path: '', redirectTo: 'restaurant-list', pathMatch: 'full'
  },
  {
    path: 'restaurant-list',
    component: RestaurantListComponent
  },
  {
    path: 'restaurant-details/:id', component: RestaurantDetailsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
