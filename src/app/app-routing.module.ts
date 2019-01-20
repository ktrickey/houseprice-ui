import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HousePriceComponent } from './house-price/house-price.component';
import { HousePriceSearchComponent } from './house-price/house-price-search.component';

const routes: Routes = [
  { path: 'search', component: HousePriceSearchComponent, data: {animation: 'HomePage'} },
  { path: 'prices/:postcode/radius/:radius', component: HousePriceComponent },
  { path: 'price/:id', component: HousePriceComponent },
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: '**', redirectTo: 'search', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
