import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../classes/todo';
import { TODOS } from '../utils/mock-todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  maxId: number = 0;
  todos: Todo[] = TODOS;
  
  constructor() { }
  
  getAll(): Todo[] {
    console.log('getAllTodos', this.todos)
    
    const todos = this.todos
    
    return todos;
  }
  
  get(id: number): Todo | undefined {
    console.log('getTodo', id)

    const todo = this.todos
    .filter(todo => todo.id === id)
    .pop();
    
    console.log('getTodo', todo)

    return todo
  }

  add(label: string) {
    console.log('addTodo', label)

    this.maxId = this.todos.length > 0 ? Math.max(...this.todos.map(todo => todo.id)) + 1 : 1;

    const newItem = {
      id: this.maxId,
      label: label,
      important: false,
      done: false
    }

    console.log('addTodo', newItem)

    this.todos.push(newItem);
  }

  update(id: number, values: Object = {}): Todo | null {
    console.log('updateTodo', id, values)
    
    const todo = this.get(id);

    console.log('updateTodo', todo)

    if (!todo) {
      return null;
    }

    Object.assign(todo, values);
    
    return todo;
  }
  
  toggleImportant(todo: Todo){
    this.update(todo.id, {
      important: !todo.important
    });

    console.log('toggleTodoImportant') 
  }
  
  
  toggleDone(todo: Todo){
    const updatedTodo = this.update(todo.id, {
      done: !todo.done
    });
    
    console.log('toggleTodoDone', updatedTodo)
    
    return updatedTodo;
  }
  
  delete(id: number): TodoService {
    console.log('deleteTodo', id)
    
    // this.todos = this.todos
    // .filter(todo => todo.id !== id);

    const index = this.todos.findIndex((item) => item.id === id)

      if (index !== -1) {
        this.todos.splice(index, 1)
      }
    
    console.log('deleteTodo', this.todos)
    
    return this;
  }
  
  deleteAll(): TodoService {
    this.todos = []

    console.log('deleteAllTodos', this.todos)

    return this;
  } 
}
