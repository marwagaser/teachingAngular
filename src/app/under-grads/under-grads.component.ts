import { Component, OnInit,Input,Output,EventEmitter,OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-under-grads',
  templateUrl: './under-grads.component.html',
  styleUrls: ['./under-grads.component.css']
})
export class UnderGradsComponent implements OnInit,OnChanges {
@Input() public studentList;
@Input() public ourvalue;
@Output() public childEvent = new EventEmitter();
@Output() public studentDeletion = new EventEmitter<string>();


  constructor() { }
  sendInfo() {
  this.childEvent.emit("Hello I am sending this to the parent");
  }
  ngOnChanges(change: SimpleChanges) {
    console.log("A change has happened");
  }
  delete(name: string) {
  this.studentDeletion.emit(name);
  console.log(name);
  }
  ngOnInit() {
    this.ourvalue = "Hello"
  }

}
