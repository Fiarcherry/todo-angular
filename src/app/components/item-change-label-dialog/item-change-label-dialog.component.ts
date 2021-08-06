import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-change-label-dialog',
  templateUrl: './item-change-label-dialog.component.html',
  styleUrls: ['./item-change-label-dialog.component.css']
})
export class ItemChangeLabelDialogComponent implements OnInit {

  @Input()
  label: string = ''
  @Input()
  active: boolean = false

  @Output() 
  close = new EventEmitter<{ confirm: boolean, label: string }>();

  constructor() { }

  ngOnInit(): void {
  }

  handleContentClick(e: Event): void {
    e.stopPropagation()
  }

  handleBackgroundClick(): void {
    this.handleCancel()
  }

  handleConfirm(): void {
    this.close.emit({ confirm: true, label:this.label });
    this.closeDialog()
  }
  
  handleCancel(): void {
    this.close.emit({ confirm: false, label:this.label });
    this.closeDialog()
  }
  
  closeDialog(): void {
    this.active = false
  }

}
