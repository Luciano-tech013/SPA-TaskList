import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TasksDataService } from 'src/app/services/tasks-data.service';
import { Tasks } from '../tasks/tasks';

@Component({
  selector: 'app-tasks-form',
  templateUrl: './tasks-form.component.html',
  styleUrls: ['./tasks-form.component.css']
})
export class TasksFormComponent implements OnInit {
  tasks: Tasks[] = [];
  formTask!: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private taskService: TasksDataService
  ) {
    this.formTask = this.formBuilder.group({
      titulo: [''],
      descripcion: ['']
    });
   }

  ngOnInit(): void {
  }

  addTask() {
    this.taskService.add(this.formTask.value).subscribe();
  }
}
