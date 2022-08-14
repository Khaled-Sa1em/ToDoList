import { default as P } from "./createPTag.js";
import { default as Btn } from "./createBtnTag.js";

export default class TaskTag {
  constructor() {
    this.p;
    this.btnEdit;
    this.btnDel;
    this.Tag = document.createElement("li");
    this.Tag.classList.add("list-item");
    this.Tag.classList.add("d-flex");
    this.Tag.classList.add("border-radius");
  }

  get Id() {
    return this.Tag.getAttribute("id");
  }

  set Id(_id) {
    this.Tag.setAttribute("id", "_id");
  }

  set tagElements(_data) {
    // debugger;
    this.Tag.appendChild(this.createPObj(_data));
    this.Tag.appendChild(this.createBtns());
  }

  createPObj(_data) {
    this.p = new P();
    this.p.Text = _data;

    return this.p.pTag;
  }

  createBtns() {
    this.btnEdit = new Btn();
    this.btnDel = new Btn();

    this.btnEdit.Type = "edit";
    this.btnDel.Type = "del";

    const btns = document.createElement("div");
    btns.classList.add("btns");

    btns.appendChild(this.btnEdit.btnTag);
    btns.appendChild(this.btnDel.btnTag);

    return btns;
  }

  appendTaskTag() {
    return this.Tag;
  }
}
