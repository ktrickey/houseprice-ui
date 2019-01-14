import { Component, OnInit } from '@angular/core';
import { IPrice } from './price';
import { AppRoutingModule } from '../app-routing.module';
import { ActivatedRoute, Router } from '@angular/router';
import { HousePriceService } from './house-price.service';

@Component({
  selector: 'app-house-price',
  templateUrl: './house-price.component.html',
  styleUrls: ['./house-price.component.css']
})
export class HousePriceComponent implements OnInit {

  constructor(route: ActivatedRoute,
    private router: Router,
    private priceService: HousePriceService) {
      this.postcode = route.snapshot.params.postcode;
      this.radius = route.snapshot.params.radius;
  }

  prices: IPrice[] = [];
  errorMessage: '';
  postcode: string;
  radius: number;

  ngOnInit() {
    this.priceService.getPrices().subscribe(
      prices => this.prices = prices,
      error => this.errorMessage = <any>error
    );
  }

  onBack(): void {
    this.router.navigate(['./']);
  }

}
