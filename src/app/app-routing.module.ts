import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkListComponent } from './drink-list/drink-list.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
},
{
  path: 'home', component:HomeComponent
},
{
  path: 'menu', component:DrinkListComponent
},
{
  path: 'gallery', component:GalleryComponent
},
{
  path: 'offers', component:OffersComponent
},
{
  path: '**',
  redirectTo:'home'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
