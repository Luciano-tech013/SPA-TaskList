import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { TasksDataService } from 'src/app/services/tasks-data.service';
import { TaskRealizeService } from 'src/app/services/task-realize.service';
import { Tasks } from '../tasks/tasks';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnDestroy {
  tasks: any;
  subscription!: Subscription;

  constructor(private taskService: TasksDataService,
              private realize: TaskRealizeService) { }

  ngOnInit(): void {
    this.getTasks();

    this.subscription = this.taskService.refresh$.subscribe(() => {
      this.getTasks();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    console.log('Observable destruido');
  }

  public getTasks() {
    this.taskService.getAll()
    .subscribe(tasks => (this.tasks = tasks));
  }

  public addRealize(task: Tasks) {
    this.realize.taskRealize(task);
  }

  public deleteTask(id: string) {
    this.taskService.delete(id).subscribe();
  }
}
