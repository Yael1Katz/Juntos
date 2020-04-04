import { Component, OnInit } from '@angular/core';
import { GeoService } from 'src/app/services/geo.service';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {
  lat: number;
  lng:number;
  points: any;

  constructor(private geo: GeoService) {


   }

  ngOnInit() {
    this.getUserLocation();
    this.geo.hits.subscribe(hits => this.points = hits);

  }

  private getUserLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position =>{
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;

        
        this.geo.getLocations(500, [this.lat, this.lng]);
      });
    }
  }

  trackByFn(_, doc) {
    return doc.id;
  }

  createPoint(lat, lng) {
    // const collection = this.geo.hits('places')

    // // Use the convenience method
    // collection.setPoint('my-place', lat, lng)

    // // Or be a little more explicit 
    // const point = this.geo.point(lat, lng)
    // collection.setDoc('my-place', { position: point.data })
  }
}
