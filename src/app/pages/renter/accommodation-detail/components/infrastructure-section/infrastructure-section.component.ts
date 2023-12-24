import { Component, Input } from '@angular/core';
import { IInfrastructureSectionData } from '../interface';

@Component({
  selector: 'app-infrastructure-section',
  templateUrl: './infrastructure-section.component.html',
  styleUrls: ['./infrastructure-section.component.css'],
})
export class InfrastructureSectionComponent {
  @Input() infrastructureSectionData: IInfrastructureSectionData | undefined;
}
