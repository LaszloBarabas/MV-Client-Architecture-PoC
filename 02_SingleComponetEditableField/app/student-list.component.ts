

import {Component} from '@angular/core';

import {Student} from './student'; 

@Component({
    selector: 'my-student-list', 
    template: `
                <h2> Welcome to the student list </h2> 
                <div> 
                    <label> Id: {{student.id}} </label> 
                    <label> Id: {{student.name}} </label> 
                </div> 
                <div> 
                    <input [(ngModel)]="student.name" /> 
                </div>  
                 `
})
export class StudentListComponent{

    student: Student = { id: 1234,   name: "Alpar Kiss"};  

}   