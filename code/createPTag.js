export default class P {
  constructor() {
    this.p = document.createElement("p");
    this.p.setAttribute("id", "task-txt");
    this.p.classList.add("task");
    this.p.classList.add("flex-item");
  }

  set Text(_data) {
    this.p.innerText = _data;
  }

  get pTag() {
    return this.p;
  }
}
