import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todos.service';

import {
  faExclamationCircle,
  faTrashAlt,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { PageService } from 'src/app/services/page.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
  faExclamationCircle = faExclamationCircle
  faTrashAlt = faTrashAlt
  faCheckCircle = faCheckCircle
  faCircle = faCircle
  
  @Input() todo!: Todo;

  label: string = '';
  isLastPageDeleted: boolean = false
  
  constructor(
    private todoService: TodoService,
    private pageService: PageService
    ) { }
  
  ngOnInit(): void {
    this.pageService.getIsLastDeleted()
      .subscribe((data) => this.isLastPageDeleted = data)

    this.label = this.todo.label
  }

  handleLabelUpdate(id: number): void {
    if (this.label !== this.todo.label) {
      this.todoService.updateLabel(id, this.label)
    }
  }

  handleLabelUpdateCancel(): void {
    this.label = this.todo.label
  }

  handleToggleImportant(id: number): void {
    this.todoService.toggleImportant(id)
  }

  handleToggleDone(id: number): void {
    this.todoService.toggleDone(id)
  }
  
  handleDelete(id: number): void {
    this.todoService.delete(id)
    
    if (this.isLastPageDeleted) {
      let lastPage: number = 0
      
      this.pageService.getLast().pipe(first()).subscribe((data) => lastPage = data)

      this.pageService.set(lastPage)
    }
  }
}
