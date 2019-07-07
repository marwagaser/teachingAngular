import { Component, OnInit,Input } from '@angular/core';
import {student} from "../student"; //import here student.ts
@Component({
  selector: 'app-post-grads',
  templateUrl: './post-grads.component.html',
  styleUrls: ['./post-grads.component.css']
})
export class PostGradsComponent implements OnInit {
  @Input() public topGrad;
  constructor() { }

  ngOnInit() {
  }

}
