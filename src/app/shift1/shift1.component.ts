import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray, NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import * as moment from 'moment';
import { shift1 } from '../data.mock';
@Component({
  selector: 'app-shift1',
  templateUrl: './shift1.component.html',
  styleUrls: ['./shift1.component.css']
})
export class Shift1Component implements OnInit {
  shift1Details;
  Shift1Data;
  value: Date;
  check: boolean;
  startvalue1;
  startvalue2;
  startvalue3;
  startvalue4;
  Shift1Form: FormGroup;
  Shift2Form: FormGroup;
  a1: number;
  daysvalue: any;
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  group;
  e1Time;
  s1Time;
  e2Time;
  s2Time;
s1Time1; s1Time2; s1Time3; s1Time4; s1Time5; s1Time6;
  rightHour1;
  rightHour2;
  rightHour3;
error1 = false;
error2 = false;
error3 = false;
  // checked: boolean;
  // startTime: any;
  // endTime: any;
  // credentials: {checked: boolean, startTime: Date, endTime: Date };
  constructor(private dataservice: DataService, private fb: FormBuilder) {
    this.Shift1FormCreation();
  }
  ngOnInit() {
    this.shift1Details = this.dataservice.getShift1();
  }
  createcontrol() {
   return this.fb.group({
      startTime: ['8:00 AM', Validators.required],
      endTime: ['5:00 PM', Validators.required],
    });
  }

  Shift1FormCreation() {
    this.Shift1Form = this.fb.group({
    'Monday': this.fb.array([this.createcontrol()]),
    'Tuesday': this.fb.array([this.createcontrol()]),
    'Wednesday': this.fb.array([this.createcontrol()]),
    'Thursday': this.fb.array([this.createcontrol()]),
    'Friday': this.fb.array([this.createcontrol()]),
    'Saturday': this.fb.array([this.createcontrol()]),
    'Sunday': this.fb.array([this.createcontrol()]),
  });
  this.Shift2Form = this.fb.group({
    'Monday': this.fb.array([this.createcontrol()]),
    'Tuesday': this.fb.array([this.createcontrol()]),
    'Wednesday': this.fb.array([this.createcontrol()]),
    'Thursday': this.fb.array([this.createcontrol()]),
    'Friday': this.fb.array([this.createcontrol()]),
    'Saturday': this.fb.array([this.createcontrol()]),
    'Sunday': this.fb.array([this.createcontrol()]),
  });
  // console.log(this.Shift1Form.value);
  // console.log(this.Shift2Form.value);
}
valueBasedOnStartTime() {

}
  ApplyForAll(form) {
    this.startvalue1 = this.Shift1Form.value.Monday[0].startTime;
    this.startvalue2 = this.Shift1Form.value.Monday[0].endTime;
    this.startvalue3 = this.Shift2Form.value.Monday[0].startTime;
    this.startvalue4 = this.Shift2Form.value.Monday[0].endTime;
    // console.log(this.Shift1Form.value.Monday[0].startTime);
    // console.log(this.Shift1Form.value.Monday[0].endTime);
    // // console.log(this.Shift1Form.controls[this.days[0]].controls[0].value);
    // // console.log(this.Shift1Form.value.Monday[0]);
    for (let i = 1; i < this.days.length; i++) {
      this.Shift1Form.controls[this.days[i]].controls[0].controls.startTime.setValue(this.startvalue1);
      this.Shift1Form.controls[this.days[i]].controls[0].controls.endTime.setValue(this.startvalue2);
    }
    for (let i = 1; i < this.days.length; i++) {
      this.Shift2Form.controls[this.days[i]].controls[0].controls.startTime.setValue(this.startvalue3);
      this.Shift2Form.controls[this.days[i]].controls[0].controls.endTime.setValue(this.startvalue4);
    }
    this.rightHour1 = (this.startvalue2 - this.startvalue1);
    console.log('rightHours', this.rightHour1);
    console.log(((this.rightHour1 / 24) / 1440) / 100);
    if (this.rightHour1 <= 12) {
      console.log('NextDay');
    } else {
    console.log('SameDay');
    }
   this.rightHour2 = (this.startvalue4 - this.startvalue3);
    console.log('rightHours', this.rightHour2);
    console.log(((this.rightHour2 / 24) / 1440) / 100);
    if (this.rightHour2 <= 12) {
      const Nday = 'Nextday';
      console.log('Nday');
    } else {
      const Sday = 'Sameday';
      console.log('Sday');
    }


  }
  CopyTheAbove(day) {
    let i = 0;
    for ( i = 0; i < this.days.length; i++) {
      if (this.days[i] === day) {
        break;
      }
    }
    // console.log(i);
    // console.log(day);
    this.startvalue1 = this.Shift1Form.controls[this.days[i - 1]].controls[0].controls.startTime.value;
    this.startvalue2 = this.Shift1Form.controls[this.days[i - 1]].controls[0].controls.endTime.value;
    this.startvalue3 = this.Shift2Form.controls[this.days[i - 1]].controls[0].controls.startTime.value;
    this.startvalue4 = this.Shift2Form.controls[this.days[i - 1]].controls[0].controls.endTime.value;
    // console.log(this.Shift1Form.controls[this.days[i - 1]].controls[0].controls.startTime.value);
    // console.log(this.Shift1Form.controls[this.days[i - 1]].controls[0].controls.endTime.value);
    this.Shift1Form.controls[this.days[i]].controls[0].controls.startTime.setValue(this.startvalue1);
    this.Shift1Form.controls[this.days[i]].controls[0].controls.endTime.setValue(this.startvalue2);
    this.Shift2Form.controls[this.days[i]].controls[0].controls.startTime.setValue(this.startvalue3);
    this.Shift2Form.controls[this.days[i]].controls[0].controls.endTime.setValue(this.startvalue4);
  }
  onChangeValue(day) {
      let i = 0;
    for ( i = 0; i < this.days.length; i++) {
      if (this.days[i] === day) {
        break;
      }
    }
    this.Shift1Form.controls[this.days[i]].controls[0].controls.startTime.setValue(this.startvalue1);
    this.Shift1Form.controls[this.days[i]].controls[0].controls.endTime.setValue(this.startvalue2);
    // this.startvalue3 = this.Shift2Form.controls[this.days[i - 1]].controls[0].controls.startTime.value;
    // this.startvalue4 = this.Shift2Form.controls[this.days[i - 1]].controls[0].controls.endTime.value;
  }
  onSubmit() {

    // // console.log(this.Shift1Form.value, this.Shift1Form.valid);
    // // console.log(this.Shift2Form.value, this.Shift2Form.valid);
    for (let i = 0; i < this.days.length; i++) {
        this.s1Time = this.Shift1Form.controls[this.days[i]].controls[0].controls.startTime.value;
        this.e1Time = this.Shift1Form.controls[this.days[i]].controls[0].controls.endTime.value;
        console.log('s1Time:', this.s1Time);
        console.log('e1Time:', this.e1Time);
    }
    // for (let i = 0; i < this.days.length; i++) {
    //     this.s1Time1 = this.Shift1Form.controls[this.days[i + 1]].controls[0].controls.startTime.value;
    //     console.log('s1Time11111111111111111111111111:', this.s1Time1);
    // }
    for (let i = 0; i < this.days.length; i++) {
        this.s2Time = this.Shift2Form.controls[this.days[i]].controls[0].controls.startTime.value;
        this.e2Time = this.Shift2Form.controls[this.days[i]].controls[0].controls.endTime.value;
        console.log('s2Time:', this.s2Time);
        console.log('e2Time:', this.e2Time);
    }

    if (this.e1Time.getTime() >= this.s2Time.getTime()) {
      this.error1 = true;
    } else {
      this.error1 = false;
    }

    // // this.startvalue1 = this.Shift1Form.value.Monday[0].startTime;
    // // this.startvalue2 = this.Shift1Form.value.Monday[0].endTime;
    // // this.startvalue3 = this.Shift2Form.value.Monday[0].startTime;
    // // this.startvalue4 = this.Shift2Form.value.Monday[0].endTime;

    // // this.rightHour1 = (this.startvalue2 - this.startvalue1);
    // // console.log('rightHours', this.rightHour1);
    // // console.log(((this.rightHour1 / 24) / 1440) / 100);
    // // if (this.rightHour1 <= 12) {
    // //   console.log('NextDay');
    // // } else {
    // //   console.log('SameDay');
    // // }

//   let j = 0;
//     for ( j = 0; j < this.days.length; j++) {
//       if (this.days[j] === 'Monday') {
//         break;
//       }
//     }
//       this.s1Time = this.Shift1Form.controls[this.days[j + 1]].controls[0].controls.startTime.value;
//       this.e1Time = this.Shift1Form.controls[this.days[j + 1]].controls[0].controls.endTime.value;

//  for ( j = 0; j < this.days.length; j++) {
//       if (this.days[j] === 'Tuesday') {
//         break;
//       }
//     }
//       this.s2Time = this.Shift2Form.controls[this.days[j + 1]].controls[0].controls.startTime.value;
//       this.e2Time = this.Shift2Form.controls[this.days[j + 1]].controls[0].controls.endTime.value;
         this.s1Time1 = this.Shift1Form.controls[this.days[2]].controls[0].controls.startTime.value;
         this.s1Time2 = this.Shift1Form.controls[this.days[3]].controls[0].controls.startTime.value;
        //  this.s1Time3 = this.Shift1Form.controls[this.days[4]].controls[0].controls.startTime.value;
        //  this.s1Time4 = this.Shift1Form.controls[this.days[5]].controls[0].controls.startTime.value;
        //  this.s1Time5 = this.Shift1Form.controls[this.days[6]].controls[0].controls.startTime.value;
        //  this.s1Time6 = this.Shift1Form.controls[this.days[7]].controls[0].controls.startTime.value;
        console.log('s1Time11111111111111111111111111:', this.s1Time1);
    if (this.e2Time.getTime() <= this.s2Time.getTime()) {
      this.error2 = true;
    } else {
      this.error2 = false;
    }

    if (this.e2Time.getTime() > this.s1Time1.getTime() && this.error2 === true) {
        this.error3 = true;
    } else {
        this.error3 = false;
    }
     if (this.e2Time.getTime() > this.s1Time2.getTime() && this.error2 === true) {
         this.error3 = true;
     } else {
         this.error3 = false;
     }
    //     if (this.e2Time.getTime() > this.s1Time3.getTime() && this.error2 === true) {
    //     this.error3 = true;
    // } else {
    //     this.error3 = false;
    // }
    //     if (this.e2Time.getTime() > this.s1Time4.getTime() && this.error2 === true) {
    //     this.error3 = true;
    // } else {
    //     this.error3 = false;
    // }
    //     if (this.e2Time.getTime() > this.s1Time5.getTime() && this.error2 === true) {
    //     this.error3 = true;
    // } else {
    //     this.error3 = false;
    // }
    //     if (this.e2Time.getTime() > this.s1Time6.getTime() && this.error2 === true) {
    //     this.error3 = true;
    // } else {
    //     this.error3 = false;
    // }

// //     console.log('endTimeOfShif2', this.e2Time);
// //     console.log('StartTime of Shift1', this.s1Time);
// // if(this.e1Time.getTime() > this.e2Time.getTime())
// //     console.log(t);
//   // this.s1 = (this.e1Time - this.s2Time);
//   //   console.log('rightHours', this.s1);
//   //   console.log(((this.s1 / 24) / 1440) / 100);
//   //   this.s2 = (((this.s1 / 24) / 1440) / 100);
//   //   if (this.s2 <= 0) {
//   //     console.log('Error');
//   //   } else {
//   //   console.log('NoError');
//   //   }
  // const form = 'Shift1Form';
  // const  mondaystart    = moment('2017-12-18'),
  //  mondayend    = moment('2017-12-18'),
  // tuesdaystart = moment('2017-12-19'),
  // tuesdayend = moment('2017-12-19'),
  // wednesdaystart = moment('2017-12-20'),
  // wednesdayend = moment('2017-12-20'),
  // thursdaystart = moment('2017-12-21'),
  // thursdayend = moment('2017-12-21'),
  // fridaystart = moment('2017-12-22'),
  // fridayend = moment('2017-12-22'),
  // saturdaystart = moment('2017-12-23'),
  // saturdayend = moment('2017-12-23'),
  // sundaystart = moment('2017-12-24'),
  // sundayend = moment('2017-12-24');
  // mondaystart.set({
  //   day: this.startvalue1('Shift1Form', 'Monday')
  // });
  // mondayend.set({
  // day: this.startvalue1('Shift1Form', 'Monday')
  // });
  }
}
