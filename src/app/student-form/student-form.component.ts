import { Component, OnInit } from '@angular/core';
import{nameGender} from "../name-gender"
@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
firstStudent:nameGender = {name:"",gender:""};
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
  console.log(this.firstStudent);
  }

}
