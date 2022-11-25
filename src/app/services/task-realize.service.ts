import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
    if (item!) {
      this._taskList.push({ ... task });
    }
    console.log(this._taskList);
    this.taskList.next(this._taskList);
  }
}
