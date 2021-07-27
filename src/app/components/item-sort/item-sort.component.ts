import { Component, OnInit } from '@angular/core';
import { Sort } from 'src/app/models/sort.model';
import { SortService } from 'src/app/services/sort.service';
import { SortValues } from 'src/app/utils/sortValues';

@Component({
  selector: 'app-item-sort',
  templateUrl: './item-sort.component.html',
  styleUrls: ['./item-sort.component.css']
})
export class ItemSortComponent implements OnInit {

  sort: string = 'none'

  options: Sort[] = SortValues

  constructor(
    private sortService: SortService
  ) { }

  ngOnInit(): void {
  }

  handleChange(): void {
    console.log(this.sort)
    this.sortService.set(this.sort)
  }
}
