import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../state/app.state';
import * as PageActions from '../state/actions/page.actions'
import * as PageSelectors from '../state/selectors/page.selectors'

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(
    private store: Store<AppState>
  ) { }

  get(): Observable<number> {
    return this.store.select(PageSelectors.selectPage)
  }

  getCount(): Observable<number> {
    return this.store.select(PageSelectors.selectPagesCount)
  }

  getAll(): Observable<number[]> {
    return this.store.select(PageSelectors.selectPages)
  }

  getVisible(): Observable<number[]> {
    return this.store.select(PageSelectors.selectVisiblePages)
  }

  getFirst(): Observable<number> {
    return this.store.select(PageSelectors.selectFirstPage)
  }

  getLast(): Observable<number> {
    return this.store.select(PageSelectors.selectLastPage)
  }

  getMiddleFirst(): Observable<number> {
    return this.store.select(PageSelectors.selectMiddleFirstPage)
  }

  getMiddleLast(): Observable<number> {
    return this.store.select(PageSelectors.selectMiddleLastPage)
  }

  getIsFirst(): Observable<boolean> {
    return this.store.select(PageSelectors.selectIsFirstPage)
  }

  getIsLast(): Observable<boolean> {
    return this.store.select(PageSelectors.selectIsLastPage)
  }

  getIsLastDeleted(): Observable<boolean> {
    return this.store.select(PageSelectors.selectIsLastPageDeleted)
  }

  set(page: number): void {
    this.store.dispatch(PageActions.updatePage({ page }))
  }

  increment(): void {
    this.store.dispatch(PageActions.incrementPage())
  }
  
  decrement(): void {
    this.store.dispatch(PageActions.decrementPage())
  }
}
