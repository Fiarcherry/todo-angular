import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { todosReducer } from './state/reducers/todos.reducer'
import { filterReducer } from './state/reducers/filter.reducer';

import {  FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { HeaderComponent } from './components/header/header.component';
import { TitleComponent } from './components/title/title.component';
import { TodosLeftComponent } from './components/todos-left/todos-left.component';
import { ThemeChangerComponent } from './components/theme-changer/theme-changer.component';
import { SearchPanelComponent } from './components/search-panel/search-panel.component';
import { ItemStatusFilterComponent } from './components/item-status-filter/item-status-filter.component';
import { AddItemFormComponent } from './components/add-item-form/add-item-form.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListItemComponent,
    HeaderComponent,
    TitleComponent,
    TodosLeftComponent,
    ThemeChangerComponent,
    SearchPanelComponent,
    ItemStatusFilterComponent,
    AddItemFormComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    StoreModule.forRoot({todos: todosReducer, filter: filterReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, 
      logOnly: environment.production, 
      autoPause: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
