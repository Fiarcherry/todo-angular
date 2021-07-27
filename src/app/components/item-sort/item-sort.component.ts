import { Component, OnInit } from '@angular/core';
import { SortService } from 'src/app/services/sort.service';

@Component({
  selector: 'app-item-sort',
  templateUrl: './item-sort.component.html',
  styleUrls: ['./item-sort.component.css']
})
export class ItemSortComponent implements OnInit {

  sort: string = 'none'

  options: { value: string, label: string }[] = [
    {value: 'none', label: 'Отключить'},
    {value: 'alphabetAsc', label: 'По алфивиту ↓'},
    {value: 'alphabetDesc', label: 'По алфивиту ↑'},
    {value: 'importantAsc', label: 'По важности ↓'},
    {value: 'importantDesc', label: 'По важности ↑'},
  ]

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
