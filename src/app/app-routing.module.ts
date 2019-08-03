import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsComponent } from "./students/students.component";
import { TeachersComponent } from "./teachers/teachers.component";
import {TeacherInfoComponent} from "./teacher-info/teacher-info.component";
import {NotfoundComponent} from "./notfound/notfound.component";
const routes: Routes = [
  {path: "teachers/:name/:office", component: TeacherInfoComponent },
{ path: "students", component: StudentsComponent },
{ path: "teachers", component: TeachersComponent },
{ path: "**", component: NotfoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
