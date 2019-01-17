import { Component, OnInit } from '@angular/core';
import { IPrice } from './price';

import { ActivatedRoute, Router } from '@angular/router';
import { HousePriceService } from './house-price.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-house-price',
  templateUrl: './house-price.component.html',
  styleUrls: ['./house-price.component.css']
})
export class HousePriceComponent implements OnInit {

  constructor(route: ActivatedRoute,
    private router: Router,
    private priceService: HousePriceService) {

      this._route = route;
  }
  private _route: ActivatedRoute;
  prices: IPrice[] = [];
  errorMessage: '';
  postcode: string;
  radius: number;
  private _callPending: boolean;

  get callPending (){
    return this._callPending;
  }
  get hasPrices(): boolean {
    return this.prices && this.prices.length >0;
  }
  ngOnInit() {
    this.postcode = this._route.snapshot.params.postcode;
    this.radius = this._route.snapshot.params.radius;
    this._callPending = true;
    this.priceService.getPrices(this.postcode, this.radius).subscribe(
      lookup => {
        // var currentTime = new Date().getTime();

        // while (currentTime + 2000 >= new Date().getTime()) {
        // }
        this.prices = lookup.results;
        this._callPending = false;
      },
      error => this.errorMessage = <any>error
    );
  }

  onBack(): void {
    this.router.navigate(['./']);
  }

}
