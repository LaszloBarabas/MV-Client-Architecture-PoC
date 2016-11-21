

import {Component} from '@angular/core';
import {OnInit} from '@angular/core'; 

import {Student} from './student'; 
import {StudentListValues}   from  './mock-student'; 
import {StudentService}   from  './student.service';

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

                <div> ----- Sub component ----------</div>
                <my-student-detail [student]="actualStudent"> </my-student-detail> 
                 `, 
     providers: [StudentService]
})
export class StudentListComponent{
        actualStudent: Student; 

        constructor (private studentservice: StudentService) {} 
        // fill the studentlist with values 
        // studentList: Student[]  =  StudentListValues;   
        //studentList: Student[]  =  StudentListValues;
         studentList: Student[]; 

        onSelectedStudent(student:Student) : void  {
            this.actualStudent = student; 
        }

        ngOnInit(): void {
            this.studentservice.getStudentList().then( studentlist => this.studentList = studentlist); 
        }

}   
