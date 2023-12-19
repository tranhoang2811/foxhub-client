import { Component } from '@angular/core';

@Component({
  selector: 'app-review-section',
  templateUrl: './review-section.component.html',
  styleUrls: ['./review-section.component.css'],
})
export class ReviewSectionComponent {
  reviews = [
    {
      avatar: 'https://mdbcdn.b-cdn.net/img/new/avatars/9.webp',
      name: 'Alex',
      dateReview: '25 days ago',
      address: 'Ho Chi Minh City, VietNam',
      starNumber: '4',
      reviewContent:
        'The host is friendly, enthusiastic and responds quickly to our questions. The apartment is clean, airy, comfortable, decorated in vintage style to create a feeling of cozy lightness. The owner also assisted with contact information for famous local tourist destinations, she also facilitated a change in the check-out time compared to the plan so that the team could use the extra meeting time for the trip.',
    },
    {
      avatar: 'https://mdbcdn.b-cdn.net/img/new/avatars/1.webp',
      name: 'Emily',
      dateReview: '1 month ago',
      address: 'Da Nang City, VietNam',
      starNumber: '5',
      reviewContent:
        'The host arranged a taxi to the airport on the day of check out. I left my mobile phone in the taxi and called the host to help from a friend’s phone. The taxi driver returned to the airport with my phone. It would be disastrous without my phone right in the middle of my trip. I am really grateful to the host for her help. Bless her.',
    },
  ];
  public getStars(starNumber: string): any[] {
    const stars = parseInt(starNumber, 10);
    return new Array(stars);
  }
}
