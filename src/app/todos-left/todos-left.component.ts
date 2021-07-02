import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos-left',
  templateUrl: './todos-left.component.html',
  styleUrls: ['./todos-left.component.css']
})
export class TodosLeftComponent implements OnInit {

  doneCount = 10
  notDoneCount = 20

  constructor() { }

  ngOnInit(): void {
  }

}
