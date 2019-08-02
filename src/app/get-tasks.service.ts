import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class GetTasksService {
  constructor() {}
  getTasks() {
    return ["Do Homework", "Study for the quiz", "Prepare presentation"];
  }
}
