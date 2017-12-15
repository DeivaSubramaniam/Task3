import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shift2Component } from './shift2.component';

describe('Shift2Component', () => {
  let component: Shift2Component;
  let fixture: ComponentFixture<Shift2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shift2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shift2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
