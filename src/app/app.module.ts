import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { PostGradsComponent } from './post-grads/post-grads.component';
import { ColorfulBGDirective } from './colorful-bg.directive';
import { StudentFormComponent } from './student-form/student-form.component';
import { ReactiveStudentFormComponent } from './reactive-student-form/reactive-student-form.component';
import { ReactiveFormsModule } from "@angular/forms";
import { TeachersComponent } from './teachers/teachers.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TeacherInfoComponent } from './teacher-info/teacher-info.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    PostGradsComponent,
    ColorfulBGDirective,
    StudentFormComponent,
    ReactiveStudentFormComponent,
    TeachersComponent,
    NotfoundComponent,
    TeacherInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
