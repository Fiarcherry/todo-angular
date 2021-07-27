import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  activePage$: Observable<number>
  pagesCount$: Observable<number>
  isFirstPage$: Observable<boolean>
  isLastPage$: Observable<boolean>
  firstPage$: Observable<number>
  lastPage$: Observable<number>
  middleFirstPage$: Observable<number>
  middleLastPage$: Observable<number>
  visiblePages$: Observable<number[]>

  constructor(private pageService: PageService) {
    this.activePage$ = pageService.get()
    this.pagesCount$ = pageService.getCount() 
    this.isFirstPage$ = pageService.getIsFirst()
    this.isLastPage$ = pageService.getIsLast()
    this.firstPage$ = pageService.getFirst()
    this.lastPage$ = pageService.getLast()
    this.middleFirstPage$ = pageService.getMiddleFirst()
    this.middleLastPage$ = pageService.getMiddleLast()
    this.visiblePages$ = pageService.getVisible()
  }

  ngOnInit(): void {
  }

  handleChangePage(page: number): void {
    this.pageService.set(page)
  }

  handleIncrementPage(): void {
    this.pageService.increment()
  }

  handleDecrementPage(): void {
    this.pageService.decrement()
  }

}
