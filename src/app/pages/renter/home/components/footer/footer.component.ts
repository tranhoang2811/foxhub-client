import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  public center: google.maps.LatLngAltitude = {
    lat: 10.762622,
    lng: 106.660172,
  } as google.maps.LatLngAltitude;
  public zoom = 12;
  constructor() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      } as google.maps.LatLngAltitude;
    });
  }
}
