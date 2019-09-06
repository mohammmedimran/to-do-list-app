import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoHomeDateTimeComponentComponent } from './todo-home-date-time-component.component';

describe('TodoHomeDateTimeComponentComponent', () => {
  let component: TodoHomeDateTimeComponentComponent;
  let fixture: ComponentFixture<TodoHomeDateTimeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoHomeDateTimeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoHomeDateTimeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
