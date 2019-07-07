import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { PostGradsComponent } from './post-grads/post-grads.component';
import { ColorfulBGDirective } from './colorful-bg.directive';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    PostGradsComponent,
    ColorfulBGDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
