

import {Component} from '@angular/core';

import {Student} from './student'; 
import {StudentListValues}   from  './mock-student'; 

@Component({
    selector: 'my-student-list', 
    template: `
                <h2> Welcome to the student list </h2>
                <!--  Start the list of teh students --> 
                <ul> 
                    <li  *ngFor="let student of studentList">
                        <span> Id: {{ student.id}} </span> 
                        <span> Id: {{ student.name}} </span> 
                    
                    </li> 
                </ul> 
                <div> 
                    <label> Id: {{studentList[1].id}} </label> 
                    <label> Id: {{studentList[1].name}} </label> 
                </div> 
                <div> 
                    <input [(ngModel)]="studentList[1].name" /> 
                </div>  
                 `
})
export class StudentListComponent{
        // fill the studentlist with values 
        studentList: Student[]  =  StudentListValues;   

}   
