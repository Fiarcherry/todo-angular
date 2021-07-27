import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as FilterActions from 'src/app/state/actions/filter.actions';
import * as FilterSelectors from 'src/app/state/selectors/filter.selectors';
import { AppState } from 'src/app/state/app.state';
import { Filter } from 'src/app/models/filter.model';
import * as FilterHandler from 'src/app/handlers/filter.handler'

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
    FilterHandler.set(filter)
  }
}
