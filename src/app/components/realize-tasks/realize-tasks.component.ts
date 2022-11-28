import { Component, OnInit, OnDestroy} from '@angular/core';
import { TaskRealizeService } from 'src/app/services/task-realize.service';
import { Tasks } from '../tasks/tasks';

@Component({
  selector: 'app-realize-tasks',
  templateUrl: './realize-tasks.component.html',
  styleUrls: ['./realize-tasks.component.css']
})
export class RealizeTasksComponent implements OnInit {

  taskList: Tasks[] = [];

  constructor(private realize: TaskRealizeService) {
    this.realize.taskList.subscribe(t => this.taskList = t);
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.realize.taskList.unsubscribe();
  }

  public deleteTaskRealize(task: Tasks) {
    this.realize.deleteRealize(task);
  }
}
