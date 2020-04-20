import {Location} from "./location";

export class Report {
    id: string;
    contact: number;
    time: number;
    type: number;
    location : Location;

    // constructor(){
    // }
    constructor( id: string,
        contact: number,
        time: number,
        type: number,
        location : Location){ 
            this.id = id;
            this.contact = contact;
            this.time = time;
            this. type = type;
        }

}

// export class Report {
//     constructor(name: string) {
//       super(name);
//     }
//     move(distanceInMeters = 45) {
//       console.log("Galloping...");
//       super.move(distanceInMeters);
//     }
//   }
  