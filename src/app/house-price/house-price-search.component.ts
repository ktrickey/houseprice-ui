import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-house-price-search',
  templateUrl: './house-price-search.component.html',
  styleUrls: ['./house-price-search.component.scss'],
  preserveWhitespaces: true
})
export class HousePriceSearchComponent implements OnInit {

  constructor( private router: Router) { }
  postcode = '';
  radius = 10;

  ngOnInit() {
  }

  onSearch(): void {
    if (this.postcode) {
      this.router.navigate(['/prices', this.postcode, 'radius', this.radius]);
    }
  }
}

