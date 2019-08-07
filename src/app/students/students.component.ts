import { Component, OnInit } from "@angular/core";
import { myStudents } from "../student-data";
import { GetTasksService } from "../get-tasks.service";
import {student} from "../student"
@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.css"]
})
export class StudentsComponent implements OnInit {
  studentsArray = myStudents;
  clickedText = "";
  viewTab = "students";
  studentColor = "student-color";
  idColor = "id-color";
  hasError = true;
  boolOne = false;
  boolTwo = true;
  toggle() {
    this.boolOne = !this.boolOne;
  }

  name = myStudents[0].name;
  tasks;
  textbox="";
  students = [{ name: "Marwa", level: "undergrad" },
  { name: "Heba", level: "undergrad" },
  { name: "Amal", level: "postgrad" }];
// teachers = [{name:"Cerine", office:"c7.209"},
// {name:"Daniella", office:"c5.106"},
// {name:"Kareem", office:"c3.303"},
// {name:"Waleed", office:"c2.709"},
// {name:"Mary", office:"c1.319"}]

public undergradsList = this.undergrads();
  constructor(private _tasks: GetTasksService) {}
  ngOnInit() {
    this.tasks = this._tasks.getTasks();
  }
  undergrads() {
     var Arrayres = new Array();
     for (var i = 0; i < this.students.length; i++) {
       if (this.students[i].level === "undergrad") {
         Arrayres.push(this.students[i].name);
       }
     }
     console.log(Arrayres);
     return Arrayres;
   }
   deleteStudent(name: string) {
  for (var x = 0; x < this.students.length; x++) {
    if (this.students[x].name === name) {
      this.students.splice(x, 1);
      this.students = [...this.students];
      this.undergradsList = this.undergrads();
      console.log(x);
      return;
    }
  }
  }
  print() {
    console.log("The ranking student was clicked");
  }
}
