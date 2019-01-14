import { Component, OnInit } from '@angular/core';
import { IPrice } from './price';

@Component({
  selector: 'app-house-price',
  templateUrl: './house-price.component.html',
  styleUrls: ['./house-price.component.css']
})
export class HousePriceComponent implements OnInit {

  constructor() { }

  prices: IPrice[] = []
  ngOnInit() {
  }

}
