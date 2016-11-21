

import {Injectable} from '@angular/core';
import {Student} from './student';
import {StudentListValues} from './mock-student'; 

@Injectable()
export class StudentService{

        getStudentList(): Promise<Student[]> {
            return Promise.resolve (StudentListValues); 
        }
} 
