"use strict";
class dalService {
    constructor() {
        this.widgetId = 93195;
    }
    getTasks(callback) {
        $.ajax({
            url: "http://repetitora.net/api/JS/Tasks",
            type: "GET",
            data: {
                widgetId: this.widgetId,
            },
            success: function (data) {
                callback(data);
            }
        });
    }
    creatTasks(name, callback) {
        $.ajax({
            url: "http://repetitora.net/api/JS/Tasks",
            type: "POST",
            data: {
                widgetId: this.widgetId,
                title: name,
            },
            success: function (resultFromServer) {
                callback(resultFromServer.task);
            }
        });
    }
    deleteTasks(id, callback) {
        $.ajax({
            url: "http://repetitora.net/api/JS/Tasks?widgetId=903195",
            type: "DELETE",
            data: {
                widgetId: this.widgetId,
                taskId: id,
            },
            success: function () {
                callback();
            }
        });
    }
    updateTasks(name, id, isdone, callback) {
        $.ajax({
            url: "http://repetitora.net/api/JS/Tasks",
            type: "PUT",
            data: {
                widgetId: this.widgetId,
                title: name,
                taskId: id,
                done: isdone,
            },
            success: function (resultFromServer) {
                callback(resultFromServer.task);
            }
        });
    }
}
