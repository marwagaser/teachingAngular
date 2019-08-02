import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
teachers = [{name:"Cerine", office:"c7.209"},{name:"Daniella", office:"c5.106"},{name:"Kareem", office:"c3.303"},{name:"Waleed", office:"c2.709"},{name:"Mary", office:"c1.319"}]
  constructor() { }

  ngOnInit() {
  }

}
