import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todos-left',
  templateUrl: './todos-left.component.html',
  styleUrls: ['./todos-left.component.css']
})
export class TodosLeftComponent implements OnInit {

  doneCount$: Observable<number>
  notDoneCount$: Observable<number>

  constructor(
    private todoService: TodoService
  ) { 
    this.doneCount$ = this.todoService.getDoneCount()
    this.notDoneCount$ = this.todoService.getNotDoneCount()
  }

  ngOnInit(): void {
  }

}
