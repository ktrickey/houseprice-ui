import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HousePriceComponent } from './house-price/house-price.component';
import { HousePriceSearchComponent } from './house-price/house-price-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HousePriceComponent,
    HousePriceSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
