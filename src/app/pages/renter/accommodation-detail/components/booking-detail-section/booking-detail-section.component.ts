import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaymentFormComponent } from '../payment-form/payment-form.component';
@Component({
  selector: 'app-booking-detail-section',
  templateUrl: './booking-detail-section.component.html',
  styleUrls: ['./booking-detail-section.component.css'],
})
export class BookingDetailSectionComponent {
  rooms = ['#Room1', '#Room2', '#Room3', '#Room4', '#Room5'];
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  public center: google.maps.LatLngAltitude = {
    lat: 10.762622,
    lng: 106.660172,
  } as google.maps.LatLngAltitude;
  public zoom = 12;
  constructor(private modelService: NgbModal) {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      } as google.maps.LatLngAltitude;
    });
  }

  public openPaymentFormModal(): void {
    const paymentFormModal = this.modelService.open(PaymentFormComponent, {
      centered: true,
      modalDialogClass: 'payment-form-modal',
    });
  }
}
