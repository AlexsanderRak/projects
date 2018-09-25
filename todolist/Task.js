"use strict";
class Task {
    constructor(name, isDone, onClickbuttonDelit, id) {
        this.name = name;
        this.isDone = isDone;
        this.id = id;
        this.el;
        this.onClickbuttonDelit = onClickbuttonDelit;
    }
    renderTask() {
        this.el = document.createElement("div");

        this.el.innerHTML =
            `<input type="checkbox" ${this.isDone ? 'checked="true"' : ''} id = "_newTaskCheckbox">
                <lable class = "_nameNewTaskLable"></lable>
                <button id = "_buttonDelit">X</button>`;

        let newTaskCheckbox = this.el.querySelector("#_newTaskCheckbox");
        let _buttonDelit = this.el.querySelector("#_buttonDelit");
        newTaskCheckbox.addEventListener("change", this.checkboxOnChange.bind(this));
        _buttonDelit.addEventListener("click", this.delitTask.bind(this));
        if (this.isDone) {
            this.el.querySelector("._nameNewTaskLable").classList.add('through');
        }

        return this.el;

    }

    delitTask() {
        this.onClickbuttonDelit(this);
    }

    checkboxOnChange() {
        let newTaskCheckbox = document.querySelector("#_newTaskCheckbox");
        if (!!this.isDone) {
            this.isDone = false;
            this.el.querySelector("._nameNewTaskLable").classList.remove('through');
        } else {
            this.isDone = true;
            this.el.querySelector("._nameNewTaskLable").classList.add('through');
        }
    }

}

