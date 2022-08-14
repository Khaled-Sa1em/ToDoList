import { default as TaskTag } from "./createTaskTag.js";
export default class Task {
  // int id;
  // string data;
  constructor(_id,_data) {
    this.id = _id;
    this.data = _data;
    // this.tag ;
  }

  createLiTag() {
    this.tag = new TaskTag();
    this.tag.Id = this.id;
    this.tag.tagElements = this.data;
  }

  appendTag() {
    return this.tag.appendTaskTag();
  }

  get Text() {
    this.data;
  }

  get Id() {
    return this.id;
  }
}

// id =5555;