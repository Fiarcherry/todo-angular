import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import * as QueryActions from 'src/app/state/actions/query.actions';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(
    private store: Store<AppState>
  ) { }

  set(query: string): void {
    this.store.dispatch(QueryActions.updateQuery({ query }))
  }
}
