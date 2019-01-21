import { Component, OnInit } from '@angular/core';
import { IPrice } from './price';
import { ActivatedRoute, Router } from '@angular/router';
import { HousePriceService } from './house-price.service';

@Component({
  selector: "app-house-price",
  templateUrl: "./house-price.component.html",
  styleUrls: ["./house-price.component.scss"],
  preserveWhitespaces: true
})
export class HousePriceComponent implements OnInit {
  constructor(
    route: ActivatedRoute,
    private router: Router,
    private priceService: HousePriceService ) {
    this._route = route;
  }

  private _route: ActivatedRoute;
  prices: IPrice[] = [];
  errorMessage: "";
  postcode: string;
  radius: number;
  private _callPending: boolean;
  private _startRecord = 0;
  isFirstPage = true;
  moreAvailable = false;

  get callPending() {
    return this._callPending;
  }

  get hasPrices(): boolean {
    return this.prices && this.prices.length > 0;
  }

  ngOnInit() {
    this.postcode = this._route.snapshot.params.postcode;
    this.radius = this._route.snapshot.params.radius;
    this.getPrices();
  }

  getPrices() {
    this._callPending = true;
    this.priceService
      .getPrices(this.postcode, this.radius, this._startRecord)
      .subscribe(
        lookup => {
          this.moreAvailable = lookup.moreAvailable;
          this.errorMessage = "";
          this.prices = lookup.results;
          this.isFirstPage = this._startRecord === 0;
          this._callPending = false;
        },
        error => {
          this.errorMessage = <any>error;
          this._callPending = false;
        }
      );
  }

  onBack(): void {
    this.router.navigate(["./"]);
  }

  onNextPage(): void {
    if (this.moreAvailable) {
      this._startRecord += 50;
      this.getPrices();
    }
  }

  onPrevPage(): void {
    if (!this.isFirstPage) {
      this._startRecord -= 50;
      this.getPrices();
    }
  }
}
