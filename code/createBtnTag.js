export default class Btn {
  constructor() {
    this.btn = document.createElement("button");
    this.btn.innerText = "sss";
    this.btn.classList.add("btn");
    this.btn.classList.add("list-btn");
    this.btn.classList.add("text-transparent");
  }

  set Type(type) {
    if (type == "del") {
      this.btn.setAttribute("id", "btnDel");
      this.btn.classList.add("btn-danger");
      this.btn.innerText = "DELETE";
    } else {
      this.btn.setAttribute("id", "btnEdit");
      this.btn.classList.add("btn-primary");
      this.btn.innerHTML = "Edit";
    }
    this.btn.classList.add("list-btn");
  }

  get btnTag() {
    return this.btn;
  }
}
