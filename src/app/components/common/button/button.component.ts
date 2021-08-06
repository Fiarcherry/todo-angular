import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  // host: {
  //   '(click)': '_haltDisabledEvents($event)',
  // },
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input()
  type: string = "button"
  
  @Input()
  primary: boolean = false
  @Input()
  secondary: boolean = false

  @Input()
  border: boolean = false

  @Input()
  leftRound: boolean = false
  @Input()
  round: boolean = false
  @Input()
  rightRound: boolean = false
  
  @Input()
  square: boolean = false
  @Input()
  squareSmall: boolean = false

  @Input()
  insideTable: boolean = false
  @Input()
  insideTableFirstColumn: boolean = false
  @Input()
  insideTableLastColumn: boolean = false

  @Input()
  long: boolean = false
  @Input()
  stretch: boolean = false

  @Input()
  wrap: boolean = false

  @Input()
  active: boolean = false
  
  @Input()
  disabled: boolean | null = false
  
  constructor() { }

  ngOnInit(): void {
  }

  // @HostListener('click', ['$event'])
  // _haltDisabledEvents(event: Event) {
  //   if (this.disabled) {
  //     event.preventDefault();
  //     event.stopImmediatePropagation();
  //   }
  // }
}
