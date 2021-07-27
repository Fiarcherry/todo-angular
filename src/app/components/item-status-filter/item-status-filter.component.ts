import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Filter, filters } from 'src/app/models/filter.model';
import { FilterService } from 'src/app/services/filter.service';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-item-status-filter',
  templateUrl: './item-status-filter.component.html',
  styleUrls: ['./item-status-filter.component.css']
})
export class ItemStatusFilterComponent implements OnInit {
  filter$: Observable<Filter>
  firstPage: number = 0

  filters: Filter[] =  filters

  constructor(
    private filterService: FilterService,
    private pageService: PageService
  ) { 
    this.filter$ = this.filterService.get()
  }

  ngOnInit(): void {
    this.pageService.getFirst()
      .subscribe((data) => this.firstPage = data)
  }

  handleChangeFilter(filter: Filter): void {
    this.filterService.set(filter)
    this.pageService.set(this.firstPage)
  }
}
