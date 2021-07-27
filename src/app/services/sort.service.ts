import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import * as SortActions from '../state/actions/sort.actions';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor(
    private store: Store<AppState>
    ) { }

  set(sort: string): void {
    this.store.dispatch(SortActions.updateSort({ sort }))
  }
}
