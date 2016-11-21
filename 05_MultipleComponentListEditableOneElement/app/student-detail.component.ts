

import {Component, Input} from '@angular/core';
import {Student} from './student'; 


@Component({
    selector: 'my-student-detail', 
    template: `
        <h3> Student details ... </h3> 
        <div *ngIf="student"> 

            <label> Id: {{student.id }}  </label> 
            <label> Id: {{student.name }}  </label>
            <div> 
                <input [(ngModel)]="student.name" >  
            </div>  
        </div> 
    ` 
})
export class StudentDetailComponent {
        @Input()
        student : Student;   
} 