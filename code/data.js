import { default as Task } from "./taskModel.js";
export default class Data {
  constructor() {
    // this.arr = Array.from([new Task(1121,'asdasd')]);
    this.getTasks();
  }

  addTasks(_id, _text) {
    let t = new Task(_id, _text);
    if (this.arr) {
      debugger;
      this.arr.push(t);
      localStorage.setItem("Tasks", JSON.stringify(this.arr));
    }
  }

  getTasks() {
    this.arr = JSON.parse(localStorage.getItem("Tasks")) ;
    return this.arr;
  }
}
