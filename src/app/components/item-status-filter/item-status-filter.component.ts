import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Filter } from 'src/app/models/filter.model';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-item-status-filter',
  templateUrl: './item-status-filter.component.html',
  styleUrls: ['./item-status-filter.component.css']
})
export class ItemStatusFilterComponent implements OnInit {
  filter$: Observable<Filter>
  
  filters: Filter[] =  Object.values(Filter)

  constructor(private filterService: FilterService) { 
    this.filter$ = this.filterService.getType()
  }

  ngOnInit(): void {
  }

  handleChangeFilter(filter: Filter): void {
    this.filterService.setType(filter)
  }
}
