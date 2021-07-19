import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as FilterActions from '../state/actions/filter.actions';
import * as FilterSelectors from '../state/selectors/filter.selectors';
import { AppState } from '../state/app.state';
import { filterTypes } from '../models/filterTypes';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(
    private store: Store<AppState>
  ) { }

  getType(): Observable<filterTypes> {
    return this.store.select(FilterSelectors.selectFilterType)
  }

  setType(filterType: filterTypes): void {
    this.store.dispatch(FilterActions.updateFilterType({ filterType }))
  }
}
