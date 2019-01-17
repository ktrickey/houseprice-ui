export interface ILatLong {
  latitude: number;
  longitude: number;
}

export interface ILocation {
  coordinates: ILatLong;
  type: string;
}

export interface IPrice {
  transactionId: string;
  postcode: string;
  transferDate: Date;
  price: number;
  propertyType: string;
  isNew: string;
  duration: string;
  paon: string;
  saon: string;
  street: string;
  locality: string;
  city: string;
  district: string;
  county: string;
  categoryType: string;
  status: string;
  location: ILocation;
}

export interface IPriceLookup {
  moreAvailable: boolean;
  results: IPrice[];
}
