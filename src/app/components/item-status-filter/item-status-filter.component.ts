import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filterTypes } from 'src/app/models/filterTypes';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-item-status-filter',
  templateUrl: './item-status-filter.component.html',
  styleUrls: ['./item-status-filter.component.css']
})
export class ItemStatusFilterComponent implements OnInit {
  filter$: Observable<filterTypes>
  
  filters: filterTypes[] =  Object.values(filterTypes)

  constructor(private filterService: FilterService) { 
    this.filter$ = this.filterService.getType()
  }

  ngOnInit(): void {
  }

  handleChangeFilter(filterType: filterTypes): void {
    this.filterService.setType(filterType)
  }
}
