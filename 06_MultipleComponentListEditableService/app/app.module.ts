import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}     from '@angular/forms'; 
import { AppComponent }   from './app.component';
import {StudentListComponent}  from './student-list.component'; 
import {StudentDetailComponent} from './student-detail.component'; 

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, StudentListComponent, StudentDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
