import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-teacher-info',
  templateUrl: './teacher-info.component.html',
  styleUrls: ['./teacher-info.component.css']
})
export class TeacherInfoComponent implements OnInit {
office="";
  constructor(private route: ActivatedRoute) {}

   ngOnInit() {
     this.route.paramMap.subscribe(params => {
   this.office=  params.get("office");
     });
   }


}
