import { default as Task } from "./taskModel.js";
import { default as Data } from "./data.js";

window.addEventListener("load", () => {
  const Add = document.getElementById("btnAdd");
  const InputData = document.getElementById("enteredData");
  const List = document.getElementById("list");

  const Tasks = new Data();

  console.log(Tasks.arr);

  if (Tasks.arr.length) {
    // console.log(Tasks.getTasks());
    Tasks.arr.forEach((task) => {
      // task.prototype = Task;
      // const taskk = new Task(task.id, task.data);
      // Object.setPrototypeOf(task.__proto__, Base.prototype);
      task.__proto__= Object.create(Task.prototype);
      task.createLiTag();
      List.appendChild(task.appendTag());
      // console.log(task.__proto__);
      // const taskk = new Task(task.id, task.data);
      // taskk.createLiTag();
      // List.appendChild(taskk.appendTag());
    });
  } else {
    console.log("no data");
  }

  let id = 0;
  Add.addEventListener("click", () => {
    if (InputData.value.length > 1) {
      const task = new Task(++id, InputData.value);
      task.createLiTag();
      List.appendChild(task.appendTag());
      Tasks.addTasks(id, InputData.value);
    } else {
      alert("please enter some data");
    }
  });
});
