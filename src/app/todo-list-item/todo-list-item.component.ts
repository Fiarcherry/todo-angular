import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

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

  constructor() { }

  ngOnInit(): void {
  }

  faExclamationCircle = faExclamationCircle
  faTrashAlt = faTrashAlt
  faCheckCircle = faCheckCircle
  faCircle = faCircle

  todo: Todo = {
    id: 1, label: "Stand in line at the post office and keep letting people skip you.", important: false, done: false
  }

  onImportant(): void {
    console.log(this.todo.important)
    this.todo.important = !this.todo.important
    console.log(this.todo.important)
  }

  onDone(): void {
    console.log(this.todo.done)
    this.todo.done = !this.todo.done
    console.log(this.todo.done)
  }
}
