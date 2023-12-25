import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccommodationService } from 'src/app/services/staff/accommodation.service';
import { IUser } from 'src/app/interfaces/user';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent {
  public user: IUser | null = null;
  public errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private accommodationService: AccommodationService
  ) {}

  ngOnInit(): void {
    this.getUserDetail();
  }

  public getUserDetail(): void {
    const userId: string = this.route.snapshot.paramMap.get('id') || '';
    this.accommodationService.getUserById(userId).subscribe({
      next: (response) => {
        console.log('Received user detail in component:', response);
        this.user = response;
      },
      error: (error) => {
        this.errorMessage = error.message;
      },
    });
  }
  public getStatusClass(status: string | undefined): string {
    if (status) {
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
    return ''; // Return a default class or an empty string if status is undefined
  }
}
