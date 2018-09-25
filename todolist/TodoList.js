"use strict";
class TodoList {
    constructor() {
        this.tasks = [];
        this.dalServiceask = new dalService();
    }

    render() {
        let _innerHtml = document.querySelector('._head');
        _innerHtml.innerHTML = `
            <p>What to buy</p>
            <input type="text" id="nameTask">
            <button id="addNewTask">+</button>`;
        let addTask = document.querySelector("#addNewTask");
        addTask.addEventListener("click", this.post.bind(this));
        this.dalServiceask.getTasks(this.get.bind(this));
    }

    post() {
        let addTask = document.querySelector("#addNewTask");
        let nameNewTask = document.querySelector("#nameTask");
        addTask.disabled = true;
        this.dalServiceask.creatTasks(nameNewTask.value, this.addTask.bind(this));
        // this.dalServiceask.updateTasks(name,id,isdone, this.update.bind(this));
    }

    get(getTasks) {
        for (let i = 0; i < getTasks.length; i++) {
            let tasksEl = getTasks[i];
            var task = new Task(tasksEl.title, false, this.onClickbuttonDelit.bind(this), tasksEl.id);
            this.tasks.push(task);
        }

        this.renderTasks();
    }

    update() {

    }

    addTask(taskFromServer) {
        let nameNewTask = document.querySelector("#nameTask");
        if (!!nameNewTask.value) {
            var task = new Task(nameNewTask.value, false, this.onClickbuttonDelit.bind(this));
            this.tasks.push(task);
            this.renderTasks();
        }
    }

    onClickbuttonDelit(task) {
        for (let i = 0; i < this.tasks.length; i++) {
            let tasksEl = this.tasks[i];
            if (task.name === tasksEl.name) {
                this.tasks.splice(i, 1);
                this.dalServiceask.deleteTasks(tasksEl.id, this.renderTasks.bind(this));
            }
        }
    }

    renderTasks() {

        let addTask = document.querySelector("#addNewTask");
        let nameNewTask = document.querySelector("#nameTask");
        let _innerHtmlTask = document.querySelector('._tasks');
        _innerHtmlTask.innerHTML = ``;
        for (let i = 0; i < this.tasks.length; i++) {
            let tasksEl = this.tasks[i];
            let nameTask = tasksEl.name;
            _innerHtmlTask.appendChild(tasksEl.renderTask(this.el));
            let nameNewTaskLable = document.querySelectorAll("._nameNewTaskLable");
            nameNewTaskLable[i].innerHTML = tasksEl.name;
            nameNewTask.value = "";
            addTask.disabled = false;

        }
    }


};

