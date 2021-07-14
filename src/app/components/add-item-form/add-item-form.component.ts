import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css']
})
export class AddItemFormComponent implements OnInit {
  newTodoLabel: string = '';

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  handleAddTodo(): void{
    this.todoService.add(this.newTodoLabel)
    this.newTodoLabel = ''
  }
}
