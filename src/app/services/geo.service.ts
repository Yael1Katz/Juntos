import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
//import * as geofirex from "geofirex";
import { Observable, BehaviorSubject } from 'rxjs';

// Init Firebase
//import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class GeoService {
  dbRef: any;
  geoFire: any;
  //hits = new BehaviorSubject([]);

  hits: any;
  // firebaseConfig: {apiKey: "AIzaSyA6y_z7dvkzp3K1DcY-ZscHrFuXGu9gKaI",
  // authDomain: "together-corona.firebaseapp.com",
  // databaseURL: "https://together-corona.firebaseio.com",
  // projectId: "together-corona",
  // storageBucket: "together-corona.appspot.com",
  // messagingSenderId: "354068360803",
  // appId: "1:354068360803:web:4c28d7f7f882ff2b6f9256"};



  constructor(private db: AngularFirestore) { 
    //this.things = db.collection('things').valueChanges();
    //this.things.subscribe(console.log);

    this.hits = db.collection('reports').valueChanges();
    this.hits.subscribe(console.log);

    //this.dbRef = this.firestore.collection('alerts');
    //this.geoFire = geofirex.init(this.dbRef);


    //firebase.initializeApp(this.firebaseConfig);
    //this.geoFire = geofirex.init(firebase);
  }

  setLocation(key:string, coords: Array<number>){
    // this.geoFire.set(key, coords)
    //   .then(()=>{
    //     return console.log('location updated');
    //   })
    //   .catch(err => console.log(err));
  }

  getLocations(radius: number, coords: Array<number>){
    // this.geoFire.query({
    //   center: coords,
    //   radius:radius
    // })
    // .on('key entered', (key, location, distance)=>{
    //   let hit = {
    //     location: location,
    //     distance: distance
    //   }
    //   let currentHits = this.hits.value
    //   currentHits.push(hit)
    //   this.hits.next(currentHits)
    // });
  }
}
