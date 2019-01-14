import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-house-price-search',
  templateUrl: './house-price-search.component.html',
  styleUrls: ['./house-price-search.component.css']
})
export class HousePriceSearchComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  postcode: string;
  radius: number = 10
  onSearch(): void {
    this.router.navigate(['/prices', this.postcode, 'radius', this.radius]);
  }
}

