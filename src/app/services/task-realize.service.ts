import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TaskListComponent } from '../components/tasks-list/task-list.component';
import { Tasks } from '../components/tasks/tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskRealizeService {

  private _taskList: Tasks[] = [];
  taskList: BehaviorSubject<Tasks[]> = new BehaviorSubject(this._taskList);

  constructor() { }

  public taskRealize(task: Tasks) {
    let item = this._taskList.find((v1) => v1.titulo == task.titulo);
    if (!item) {
      this._taskList.push({ ... task });
    }
    this.taskList.next(this._taskList);
  }

  public deleteRealize(task: Tasks) {
    this._taskList = this._taskList.filter((v1) => v1 != task);
    this.taskList.next(this._taskList);
  }
}
