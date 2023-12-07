import { Component } from '@angular/core';
import { EAccommodationTypeOption } from 'src/app/enums/accommodation';

@Component({
  selector: 'app-accommodation-type-option',
  templateUrl: './accommodation-type-option.component.html',
  styleUrls: ['./accommodation-type-option.component.css'],
})
export class AccommodationTypeOptionComponent {
  public selectedType: EAccommodationTypeOption =
    EAccommodationTypeOption.POPULAR;

  public toggleOptionButton(type: string): void {
    this.selectedType = type as EAccommodationTypeOption;
  }
}
