

import {Component} from '@angular/core';

import {Student} from './student'; 

@Component({
    selector: 'my-student-list', 
    template: '<h2> Welcome to the student list:: {{student.name}} </h2>'
})
export class StudentListComponent{

    student: Student = { id: 1234,   name: "Alpar Kiss"};  

}   