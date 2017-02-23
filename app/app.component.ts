import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
    selector: 'my-app',
    template: `
  <div class="container">
    <h1>Angular To-Do List</h1>
    <task-list
      [childTaskList]="masterTaskList"
      (clickSender)="showDetails($event)"
      (deleteSender)="deleteDetails($event)"
     ></task-list>
    <edit-task
      [childSelectedTask]="selectedTask"
      (doneClickedSender)="finishedEditing()"
    ></edit-task>
    <new-task
      (newTaskSender)="addTask($event)"
    ></new-task>
  </div>
  `
})

export class AppComponent {
    public masterTaskList: Task[] = [
    ];
    selectedTask: Task = null;
    showDetails(clickedTask: Task) {
        this.selectedTask = clickedTask;
    }
    deleteDetails(clickedTask: Task) {
        var a = this.masterTaskList.indexOf(clickedTask);
        this.masterTaskList.splice(a, 1);
    }
    finishedEditing() {
        this.selectedTask = null;
    }
    addTask(newTaskFromChild: Task) {
        this.masterTaskList.push(newTaskFromChild);
    }
}
