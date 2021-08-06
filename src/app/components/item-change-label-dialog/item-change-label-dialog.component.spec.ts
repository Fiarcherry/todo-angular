import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemChangeLabelDialogComponent } from './item-change-label-dialog.component';

describe('ItemChangeLabelDialogComponent', () => {
  let component: ItemChangeLabelDialogComponent;
  let fixture: ComponentFixture<ItemChangeLabelDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemChangeLabelDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemChangeLabelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
