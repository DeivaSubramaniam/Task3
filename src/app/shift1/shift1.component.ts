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
  startvalue1;
  startvalue2;
  startvalue3;
  startvalue4;
  Shift1Form: FormGroup;
  Shift2Form: FormGroup;
  daysvalue: any;
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
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
}
valueBasedOnStartTime() {

}
  ApplyForAll(form) {
    this.startvalue1 = this.Shift1Form.value.Monday[0].startTime;
    this.startvalue2 = this.Shift1Form.value.Monday[0].endTime;
    this.startvalue3 = this.Shift2Form.value.Monday[0].startTime;
    this.startvalue4 = this.Shift2Form.value.Monday[0].endTime;
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

    this.startvalue1 = this.Shift1Form.controls[this.days[i - 1]].controls[0].controls.startTime.value;
    this.startvalue2 = this.Shift1Form.controls[this.days[i - 1]].controls[0].controls.endTime.value;
    this.startvalue3 = this.Shift2Form.controls[this.days[i - 1]].controls[0].controls.startTime.value;
    this.startvalue4 = this.Shift2Form.controls[this.days[i - 1]].controls[0].controls.endTime.value;

    this.Shift1Form.controls[this.days[i]].controls[0].controls.startTime.setValue(this.startvalue1);
    this.Shift1Form.controls[this.days[i]].controls[0].controls.endTime.setValue(this.startvalue2);
    this.Shift2Form.controls[this.days[i]].controls[0].controls.startTime.setValue(this.startvalue3);
    this.Shift2Form.controls[this.days[i]].controls[0].controls.endTime.setValue(this.startvalue4);
  }
  onSubmit() {

    for (let i = 0; i < this.days.length; i++) {
        this.s1Time = this.Shift1Form.controls[this.days[i]].controls[0].controls.startTime.value;
        this.e1Time = this.Shift1Form.controls[this.days[i]].controls[0].controls.endTime.value;
        console.log('s1Time:', this.s1Time);
        console.log('e1Time:', this.e1Time);
    }

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
     const mondaystart = moment('2017-12-11'),
   mondayend    = moment('2017-12-11'),
  tuesdaystart = moment('2017-12-12'),
  tuesdayend = moment('2017-12-12'),
  wednesdaystart = moment('2017-12-13'),
  wednesdayend = moment('2017-12-13'),
  thursdaystart = moment('2017-12-14'),
  thursdayend = moment('2017-12-14'),
  fridaystart = moment('2017-12-15'),
  fridayend = moment('2017-12-15'),
  saturdaystart = moment('2017-12-16'),
  saturdayend = moment('2017-12-16'),
  sundaystart = moment('2017-12-17'),
  sundayend = moment('2017-12-17');
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
  }
}
