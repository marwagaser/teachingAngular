import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder,Validators} from "@angular/forms";
import { avoidWord } from "../customValidation";
@Component({
  selector: 'app-reactive-student-form',
  templateUrl: './reactive-student-form.component.html',
  styleUrls: ['./reactive-student-form.component.css']
})
export class ReactiveStudentFormComponent implements OnInit {
  signupForm = this.formB.group({
     username: ["",[Validators.required,  avoidWord(/hack/)]],
     password: ["",[avoidWord(/password/)]],
     confirmedpassword: [""]
   });
   // signupForm = new FormGroup({
   //   username: new FormControl(""),
   //   password: new FormControl(""),
   //   confirmedpassword: new FormControl("")
   // });
constructor(private formB: FormBuilder) {}

  ngOnInit() {
  }

}
