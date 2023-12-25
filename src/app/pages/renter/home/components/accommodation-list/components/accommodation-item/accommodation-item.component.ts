import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-accommodation-item',
  templateUrl: './accommodation-item.component.html',
  styleUrls: ['./accommodation-item.component.css']
})
export class AccommodationItemComponent {
  @Input() carouselImages: string[] = [];
}
