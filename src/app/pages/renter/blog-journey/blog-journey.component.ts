import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-journey',
  templateUrl: './blog-journey.component.html',
  styleUrls: ['./blog-journey.component.css'],
})
export class BlogJourneyComponent {
  cards = [
    {
      cardImage:
        'https://i.pinimg.com/564x/77/b4/21/77b421686d6088e6527cf57d68c69e96.jpg',
      cardTitle: 'The Golden Sands of Florida and California',
      cardText:
        'Explore the breathtaking golden sands of Florida and California. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed et donec purus viverra. Sit justo velit, eu sed.',
      cardLabel: 'Solo Travel',
      author: 'Adam Smith',
    },
    {
      cardImage:
        'https://i.pinimg.com/564x/6f/aa/60/6faa607208e2721608484822ffd16efc.jpg',
      cardTitle: 'Discovering the Beauty of Nature',
      cardText:
        'Embark on a journey to discover the unparalleled beauty of nature. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      cardLabel: 'Solo Travel',
      author: 'Emily Johnson',
    },
    {
      cardImage:
        'https://i.pinimg.com/564x/11/fc/44/11fc44537464942cc14a930f9385345c.jpg',
      cardTitle: 'Exploring the Urban Jungle',
      cardText:
        'Immerse yourself in the vibrant energy of the urban jungle. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      cardLabel: 'Solo Travel',
      author: 'Michael Davis',
    },
    {
      cardImage:
        'https://i.pinimg.com/564x/ea/60/72/ea6072367351b1ed24c60f1a66df3d59.jpg',
      cardTitle: 'A Journey to the Unknown',
      cardText:
        'Embark on a thrilling journey to the unknown. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      cardLabel: 'Solo Travel',
      author: 'Jessica Brown',
    },
    {
      cardImage:
        'https://i.pinimg.com/736x/f5/47/b1/f547b12a2f25d48f48a85931bf08f3c1.jpg',
      cardTitle: 'Relaxing Beach Retreat',
      cardText:
        'Indulge in a relaxing beach retreat. Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      cardLabel: 'Solo Travel',
      author: 'Sophia Miller',
    },
    {
      cardImage:
        'https://i.pinimg.com/564x/dd/97/28/dd972845bfc819034b8ebe18b01ff563.jpg',
      cardTitle: 'Mountains: A Majestic View',
      cardText:
        'Experience the majestic views of the mountains. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.',
      cardLabel: 'Solo Travel',
      author: 'David Wilson',
    },
  ];
}
