import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'todos/all', pathMatch: 'full' },
  { path: 'todos/all', component: TodoListComponent },
  { path: 'todos/active', component: TodoListComponent },
  { path: 'todos/done', component: TodoListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }