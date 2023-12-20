import { Component } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
})
export class ListingComponent {
  listings = Array.from({ length: 9 }, (_, index) => ({
    address: 'Thu Duc District - HCM City',
    rate: 5,
    reviews: 42,
    owner: 'Nguyen Van A',
    price: '$15/day',
    imageUrl: 'assets/mock/search-result-sample.png',
  }));
}
