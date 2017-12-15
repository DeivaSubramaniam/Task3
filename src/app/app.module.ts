import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';
import {MenuItem, CalendarModule} from 'primeng/primeng';
import {AccordionModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DateTimePickerModule} from 'ngx-datetime-picker';
import { Shift1Component } from './shift1/shift1.component';
import { Shift2Component } from './shift2/shift2.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
@NgModule({
  declarations: [
    AppComponent,
    Shift1Component,
    Shift2Component
  ],
  imports: [
    Ng2DatetimePickerModule,
    FormsModule,
    CalendarModule,
    BrowserModule,
    BrowserAnimationsModule,
    AccordionModule,
    DateTimePickerModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ DataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
