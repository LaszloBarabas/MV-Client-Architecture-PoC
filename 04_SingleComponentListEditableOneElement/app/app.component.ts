import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
            <h1>{{ title}}</h1>
            <div> === start of the student list component === </div> 
            <my-student-list> </my-student-list>
            `
})
export class AppComponent {
  title: string = 'Welcome Single Component with list element one editable'

 }
