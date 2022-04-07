import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FluentUiIconsModule } from 'ngx-fluent-ui-icons';
import {
  search_20_regular,
  play_24_filled,
  network_check_24_regular,
  home_24_filled,
  window_new_20_regular,
  arrow_left_20_filled,
  dismiss_28_filled
} from 'ngx-fluent-ui-icons';
import { EmisionComponent } from './@pages/emision/emision.component';

import { ApiAnime } from './@scripts/ApiAnime';
import { FGlobal } from './@scripts/Global';

import { ItemsTableComponent } from './@components/items-table/items-table.component';
import { SimplebarAngularModule } from 'simplebar-angular';
import { ItemsListComponent } from './@components/items-list/items-list.component';
import { AnimesComponent } from './@pages/animes/animes.component';
import { MoviesComponent } from './@pages/movies/movies.component';
import { PremieresComponent } from './@pages/premieres/premieres.component';
import { HomeComponent } from './@pages/home/home.component';
import { ItemsList2Component } from './@components/items-list2/items-list2.component';
import { ItemsList3Component } from './@components/items-list3/items-list3.component';
import { SearchResultsComponent } from './@pages/search-results/search-results.component';
import { InfoAnimeComponent } from './@pages/info-anime/info-anime.component';
import { ItemListInfoAnimeComponent } from './@components/item-list-info-anime/item-list-info-anime.component';
import { ViewChapterComponent } from './@pages/view-chapter/view-chapter.component';

@NgModule({
  declarations: [
    AppComponent,
    EmisionComponent,
    ItemsTableComponent,
    ItemsListComponent,
    AnimesComponent,
    MoviesComponent,
    PremieresComponent,
    HomeComponent,
    ItemsList2Component,
    ItemsList3Component,
    SearchResultsComponent,
    InfoAnimeComponent,
    ItemListInfoAnimeComponent,
    ViewChapterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FluentUiIconsModule.pick({
      search_20_regular,
      play_24_filled,
      network_check_24_regular,
      home_24_filled,
      window_new_20_regular,
      arrow_left_20_filled,
      dismiss_28_filled
    }),
    SimplebarAngularModule
  ],
  providers: [
    ApiAnime,
    FGlobal
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor() {  }
}
