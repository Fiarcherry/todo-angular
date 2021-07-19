import { Component, OnInit } from '@angular/core';
import { QueryService } from 'src/app/services/query.service';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit {
  query: string = ''

  constructor(
    private queryService: QueryService
  ) { }

  ngOnInit(): void {
  }

  handleSearchUpdate(query: string): void {
    this.queryService.set(query)
  }
}
