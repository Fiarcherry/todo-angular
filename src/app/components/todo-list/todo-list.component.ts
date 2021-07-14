import { Component, OnInit } from '@angular/core';
import { Todo } from '../../classes/todo';
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    console.log('onInit')

    this.todos = this.todoService.getAll()
  }

  lastItemClass(last: boolean) {
    return { 'last-item': last }
  }

  // get todos() {
  //   return this.todoService.getAllTodos();
  // }
}
