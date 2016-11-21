

import {Component} from '@angular/core';

import {Student} from './student'; 
import {StudentListValues}   from  './mock-student'; 

@Component({
    selector: 'my-student-list', 
    template: `
                <h2> Welcome to the student list </h2>
                <!--  Start the list of teh students --> 
                <ul> 
                    <li  *ngFor="let student of studentList" (click)="onSelectedStudent(student)">
                        <span> Id: {{ student.id}} </span> 
                        <span> Id: {{ student.name}} </span> 
                    
                    </li> 
                </ul>
                <div> ---------------</div>  
                <div *ngIf="actualStudent"> 
                    <label> Id: {{actualStudent.id}} </label> 
                    <label> Id: {{actualStudent.name}} </label> 
                  <div> ---------------</div>      
                    <input [(ngModel)]="actualStudent.name" /> 
                </div>  
                 `
})
export class StudentListComponent{
        actualStudent: Student; 
        // fill the studentlist with values 
        studentList: Student[]  =  StudentListValues;   

        onSelectedStudent(student:Student) : void  {
            this.actualStudent = student; 
        }

}   
