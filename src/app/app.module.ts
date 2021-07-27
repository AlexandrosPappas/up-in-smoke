import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DrinkListComponent } from './drink-list/drink-list.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NavigationComponent } from './navigation/navigation.component';
import { OffersComponent } from './offers/offers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DrinkListComponent,
    GalleryComponent,
    NavigationComponent,
    OffersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
