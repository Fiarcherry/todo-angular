import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as FilterActions from '../state/actions/filter.actions';
import * as FilterSelectors from '../state/selectors/filter.selectors';
import { AppState } from '../state/app.state';
import { Filter } from '../models/filter.model';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(
    private store: Store<AppState>
  ) { }

  get(): Observable<Filter> {
    return this.store.select(FilterSelectors.selectFilter)
  }

  set(filter: Filter): void {
    this.store.dispatch(FilterActions.updateFilter({ filter }))
  }
}
