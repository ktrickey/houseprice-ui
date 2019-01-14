import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousePriceSearchComponent } from './house-price-search.component';

describe('HousePriceSearchComponent', () => {
  let component: HousePriceSearchComponent;
  let fixture: ComponentFixture<HousePriceSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousePriceSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousePriceSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
