import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  public cards = [
    {
      author: 'Olivia Rhye',
      date: '1 Jan 2023',
      image: 'assets/mock/blog/ngo-mon.jpg',
      title: '10,000 people admire the shimmering Ngo Mon in the night',
      text: 'More than 10,000 people flocked to Ngo Mon Square to admire the sparkling ancient capital symbol during the light show night by artists',
      tags: ['Research', 'Design'],
    },
    {
      author: 'Olivia Rhye',
      date: '1 Jan 2023',
      image: 'assets/mock/blog/22-cuisine.jpg',
      title: 'Vietnam in the top 22 best cuisines in the world',
      text: 'Vietnam ranks 22nd in the list of 100 best cuisines in the world voted by culinary experts, chefs and international guests. On December 13, Taste Atlas released its list of 100 Best',
      tags: ['Research', 'Presentation'],
    },
  ];

  populars = [
    {
      image: 'assets/mock/blog/things-need.jpg',
      title: '13 things I’d Tell Any New Traveler',
      author: 'FoxHub',
      date: '10 Nov, 2023',
    },
    {
      image: 'assets/mock/blog/nomad-family.webp',
      title:
        'They sold everything to become a digital nomad family. Here’s what happened next',
      author: 'FoxHub',
      date: '10 Nov, 2023',
    },
    {
      image: 'assets/mock/blog/woman.webp',
      title:
        'Travel and Tourism Industry Employing Growing Number of Women Since 2010',
      author: 'FoxHub',
      date: '10 Nov, 2023',
    },
    {
      image: 'assets/mock/blog/airline.webp',
      title: 'Southwest Airlines Agrees to New Deal With Pilots',
      author: 'FoxHub',
      date: '10 Nov, 2023',
    },
    {
      image: 'assets/mock/blog/bahamas.webp',
      title:
        'MSC Meraviglia Reroutes to Northern Ports Due to Bad Weather in the Bahamas',
      author: 'Adam Smith',
      date: '10 Nov, 2023',
    },
  ];
currentTab: any;
}
