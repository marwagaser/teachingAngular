import { Component, OnInit } from "@angular/core";
import { myStudents } from "../student-data";
import { GetTasksService } from "../get-tasks.service";

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
  constructor(private _tasks: GetTasksService) {}
  ngOnInit() {
    this.tasks = this._tasks.getTasks();
  }

  print() {
    console.log("The ranking student was clicked");
  }
}
