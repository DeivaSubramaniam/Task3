import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import * as moment from 'moment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  shiftDetails;
  shift1Details;
  toggle = true;
  constructor(private dataservice: DataService) {}
    ngOnInit() {
      //  this.shiftDetails = this.dataservice.getData();
      //   console.log(this.shiftDetails);
    }
    // onclick(toggle) {
    //   if (this.toggle = false) {

    //     } else {
    //     this.shiftDetails = this.dataservice.getData();
    //     console.log(this.shiftDetails);
    //   }
    // }
}
