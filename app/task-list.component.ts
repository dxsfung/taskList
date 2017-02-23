import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
    selector: 'task-list',
    template: `
    <select (change)="onChange($event.target.value)">
      <option value="all">Show All</option>
      <option value="isDone">Show Done</option>
      <option value="notDone" selected="selected">Show Not Done</option>
    </select>
        <div *ngFor="let currentTask of childTaskList | completeness:selectedCompleteness"  >
      <h3>{{ currentTask.description }}</h3>
      <button (click)="editButtonHasBeenClicked(currentTask)">Edit</button>
      <button (click)="deleteButtonClicked (currentTask)">Delete</button>
    </div>
  `
})

export class TaskListComponent {
    @Input() childTaskList: Task[];
    @Output() clickSender = new EventEmitter();
    @Output() deleteSender = new EventEmitter();
public selectedCompleteness: string = "notDone";
    editButtonHasBeenClicked(taskToEdit: Task) {
        this.clickSender.emit(taskToEdit);
    }
    deleteButtonClicked(taskTodelete: Task) {
        this.deleteSender.emit(taskTodelete);
    }
    onChange(optionFromMenu) {
      this.selectedCompleteness = optionFromMenu;
      console.log(this.selectedCompleteness);
    }
}
