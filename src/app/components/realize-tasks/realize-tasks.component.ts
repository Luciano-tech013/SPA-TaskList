import { Component, OnInit, OnDestroy} from '@angular/core';
import { Observable } from 'rxjs';
import { TaskRealizeService } from 'src/app/services/task-realize.service';
import { Tasks } from '../tasks/tasks';

@Component({
  selector: 'app-realize-tasks',
  templateUrl: './realize-tasks.component.html',
  styleUrls: ['./realize-tasks.component.css']
})
export class RealizeTasksComponent implements OnInit {

  taskList$: Observable<Tasks[]>;

  constructor(private realize: TaskRealizeService) {
    this.taskList$ = realize.taskList.asObservable();
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {

  }

}
