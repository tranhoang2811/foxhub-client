import { Component } from '@angular/core';

@Component({
  selector: 'app-accommodation-table',
  templateUrl: './accommodation-table.component.html',
  styleUrls: ['./accommodation-table.component.css'],
})
export class AccommodationTableComponent {
  // Sample data
  accommodations = [
    {
      id: 'FH030903',
      ownerName: 'My Dinh Ngoc Tra',
      address: '215/1, Dong Da, A District Chau Doc City, An Giang Province',
      dateApply: '10/11/2023',
      status: 'Pending',
      otherValue: '6',
    },
    {
      id: 'FH030903',
      ownerName: 'My Dinh Ngoc Tra',
      address: '215/1, Dong Da, A District Chau Doc City, An Giang Province',
      dateApply: '10/11/2023',
      status: 'Approved',
      otherValue: '6',
    },
    {
      id: 'FH030903',
      ownerName: 'My Dinh Ngoc Tra',
      address: '215/1, Dong Da, A District Chau Doc City, An Giang Province',
      dateApply: '10/11/2023',
      status: 'Banned',
      otherValue: '6',
    },
    {
      id: 'FH030903',
      ownerName: 'My Dinh Ngoc Tra',
      address: '215/1, Dong Da, A District Chau Doc City, An Giang Province',
      dateApply: '10/11/2023',
      status: 'Reject',
      otherValue: '6',
    },
  ];

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'status-pending';
      case 'approved':
        return 'status-approved';
      case 'banned':
        return 'status-banned';
      case 'reject':
        return 'status-reject';
      default:
        return '';
    }
  }
}
