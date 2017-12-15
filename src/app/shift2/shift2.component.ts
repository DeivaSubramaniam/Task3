import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray, NgForm } from '@angular/forms';
import * as moment from 'moment';
@Component({
  selector: 'app-shift2',
  templateUrl: './shift2.component.html',
  styleUrls: ['./shift2.component.css']
})
export class Shift2Component implements OnInit {
startvalue1;
startvalue2;
days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
group;
shift2Details;
Shift2Form: FormGroup;
  constructor(private dataservice: DataService, private fb: FormBuilder) {
    this.Shift2FormCreation();
  }
  ngOnInit() {
    this.shift2Details = this.dataservice.getShift2();
  }
   createcontrol() {
   return this.fb.group({
      startTime: ['6:00 PM', Validators.required],
      endTime: ['1:00 AM', Validators.required],
    });
   }
    Shift2FormCreation() {
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
  ApplyForAll() {
    this.group = this.Shift2Form as FormGroup;
    const control = this.group.controls[0];
    this.startvalue1 = this.Shift2Form.value.Monday[0].startTime;
    this.startvalue2 = this.Shift2Form.value.Monday[0].endTime;
    // console.log(this.Shift2Form.controls[this.days[0]].controls[0].value);
    console.log(this.Shift2Form.value.Monday[0]);
    for (let i = 1; i < this.days.length; i++) {
    //   this.Shift2Form.controls[this.days[i]].controls[0].controls.startTime.setValue(this.startvalue1);
    //   this.Shift2Form.controls[this.days[i]].controls[0].controls.endTime.setValue(this.startvalue2);
    }
  }
  CopyTheAbove(day) {
  let i = 0;
    for ( i = 0; i < this.days.length; i++) {
      if (this.days[i] === day) {
        break;
      }
    }
    console.log(i);
    console.log(day);
    // this.startvalue1 = this.Shift2Form.controls[this.days[i - 1]].controls[0].controls.startTime.value;
    // this.startvalue2 = this.Shift2Form.controls[this.days[i - 1]].controls[0].controls.endTime.value;
    // console.log(this.Shift2Form.controls[this.days[i - 1]].controls[0].controls.startTime.value);
    // console.log(this.Shift2Form.controls[this.days[i - 1]].controls[0].controls.endTime.value);
    // this.Shift2Form.controls[this.days[i]].controls[0].controls.startTime.setValue(this.startvalue1);
    // this.Shift2Form.controls[this.days[i]].controls[0].controls.endTime.setValue(this.startvalue2);
  }
  onSubmit() {
    console.log(this.Shift2Form.value, this.Shift2Form.valid);
  }
}
