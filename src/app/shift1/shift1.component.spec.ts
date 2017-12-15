import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { Shift1Component } from './shift1.component';

describe('Shift1Component', () => {
  let component: Shift1Component;
  let fixture: ComponentFixture<Shift1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shift1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shift1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Shift1Form Validity', () => {
    expect(component.Shift1Form.valid).toBeTruthy();
  });
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  for (let i = 0; i < days.length; i++) {
  const error = {};

  const time1 = this.Shift1Form.controls[this.days[i]].controls[0].controls.startTime;
  time1('8:00 AM');
  expect(time1.valid).toBeTruthy();
  }
});
