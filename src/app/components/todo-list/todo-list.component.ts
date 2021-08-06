import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Filter } from 'src/app/models/filter.model';
import { Todo } from 'src/app/models/todo.model';
import { FilterService } from 'src/app/services/filter.service';
import { TodoService } from 'src/app/services/todos.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todo[]>
  private routeSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private filterService: FilterService,
  ) {
    this.routeSubscription = this.route.data.subscribe(data => this.setFilterByRoute(data))

    this.todos$ = this.todoService.getAll()
  }

  ngOnInit(): void {
  }
  
  setFilterByRoute(data: Data): void {
    switch (data.name) {
      case Filter.Active: {
        this.filterService.set(Filter.Active)
        break;
      }
      case Filter.Done: {
        this.filterService.set(Filter.Done)
        break;
      }
      default: {
        this.filterService.set(Filter.All)
        break;
      }
    }
  }
  
  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe()
  }
}
