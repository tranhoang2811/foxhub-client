import { Component } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { AccommodationService } from 'src/app/services/staff/accommodation.service';
@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
})
export class UsersTableComponent {
  public users: IUser[] = [];
  public errorMessage: string = '';

  constructor(private accommodationService: AccommodationService) {}

  ngOnInit(): void {
    this.getUsersInformation();
  }

  getUsersInformation(): void {
    this.accommodationService.getUsersInformation().subscribe({
      next: (response) => {
        console.log('Received accommodations in component:', response);
        this.users = response;
      },
      error: (error) => {
        this.errorMessage = error.message;
      },
    });
  }

  public getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'active':
        return 'status-active';
      case 'archived':
        return 'status-archived';
      case 'banned':
        return 'status-banned';
      default:
        return '';
    }
  }
  searchTerm: string = '';
  applyFilter() {}
}
