import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemStatusFilterComponent } from './item-status-filter.component';

describe('ItemStatusFilterComponent', () => {
  let component: ItemStatusFilterComponent;
  let fixture: ComponentFixture<ItemStatusFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemStatusFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemStatusFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
