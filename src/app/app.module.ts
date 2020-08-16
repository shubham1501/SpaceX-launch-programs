import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { Routes } from '@angular/router';
import { SpacexLaunchProgramsComponent } from './component/spacex-launch-programs/spacex-launch-programs.component';

export const routes: Routes = [
  {
    path: '', redirectTo: 'spacex-launch-programs', pathMatch: 'full'
  },
  {
    path: 'spacex-launch-programs', component: SpacexLaunchProgramsComponent
  },
  // {
  //   path: 'home', component: HomeComponent
  // },
  // {
  //   path: 'movies/:category', component: MovieListingComponent
  // },
  // {
  //   path: 'wishlist', component: WishlistComponent
  // },
];

@NgModule({
  declarations: [
    AppComponent,
    SpacexLaunchProgramsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
