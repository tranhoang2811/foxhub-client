import { Component } from '@angular/core';

@Component({
  selector: 'app-infrastructure-section',
  templateUrl: './infrastructure-section.component.html',
  styleUrls: ['./infrastructure-section.component.css'],
})
export class InfrastructureSectionComponent {
  houseItems = [
    'Kitchen',
    'Private space to work',
    'TV',
    'Air conditioning',
    'Wi-fi',
    'Free on-site parking',
    'Washer',
    'CO Gas Detector',
    'Pets allowed',
    'Smoke detector',
  ];
}
