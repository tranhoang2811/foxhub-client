import { Component, Input } from '@angular/core';
import { IReviewSectionData } from '../interface';
import { IAccommodationRatingWithRelations } from 'src/app/interfaces/accommodation-rating';

@Component({
  selector: 'app-review-section',
  templateUrl: './review-section.component.html',
  styleUrls: ['./review-section.component.css'],
})
export class ReviewSectionComponent {
  @Input() reviewSectionData: IReviewSectionData | undefined;

  public getStars(starNumber: number): number[] {
    return new Array(starNumber);
  }

  public onReviewerAvatarError(event: Event, reviewerName: string): void {
    const url = `https://ui-avatars.com/api/?name=${reviewerName}&background=random&rounded=true&color=fff`;
    (event.target as any).src = url;
  }

  public getAverageRating(): number {
    const count = this.reviewSectionData?.feedbacks?.length ?? 1;
    const totalRating = this.reviewSectionData?.feedbacks?.reduce(
      (total: number, feedback: IAccommodationRatingWithRelations) => {
        return total + feedback.rate;
      },
      0
    );
    return Math.round((totalRating ? totalRating / count : 0) * 10) / 10;
  }
}
