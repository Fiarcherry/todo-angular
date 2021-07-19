import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';

import {
  faExclamationCircle,
  faTrashAlt,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

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
  
  @Input() todo?: Todo;
  
  constructor(private todoService: TodoService) { }
  
  ngOnInit(): void {
  }

  handleToggleImportant(id: number): void {
    this.todoService.toggleImportant(id)
  }

  handleToggleDone(id: number): void {
    this.todoService.toggleDone(id)
  }
  
  handleDelete(id: number): void {
    this.todoService.delete(id)
  }
}