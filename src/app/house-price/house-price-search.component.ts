import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-house-price-search',
  templateUrl: './house-price-search.component.html',
  styleUrls: ['./house-price-search.component.scss']
})
export class HousePriceSearchComponent implements OnInit {

  constructor( private router: Router) { }
  private _postcode = '';
  radius = 10;

  ngOnInit() {
  }

  get postcode() {
    return this._postcode;
  }
  set postcode(value: string) {
    this._postcode = value.toLocaleUpperCase();
  }

  onSearch(): void {
    if (this.postcode) {
      this.router.navigate(['/prices', this.postcode, 'radius', this.radius]);
    }
  }
}

