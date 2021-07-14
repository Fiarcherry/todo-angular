import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosLeftComponent } from './todos-left.component';

describe('TodosLeftComponent', () => {
  let component: TodosLeftComponent;
  let fixture: ComponentFixture<TodosLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
