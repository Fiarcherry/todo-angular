import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { Filter } from './models/filter.model';

const routes: Routes = [
  { path: '', redirectTo: 'todos/all', pathMatch: 'full' },
  { path: 'todos/all', component: TodoListComponent, data: {name: Filter.All} },
  { path: 'todos/active', component: TodoListComponent, data: {name: Filter.Active} },
  { path: 'todos/done', component: TodoListComponent, data: {name: Filter.Done} },
  { path: '**', redirectTo: 'todos/all'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }