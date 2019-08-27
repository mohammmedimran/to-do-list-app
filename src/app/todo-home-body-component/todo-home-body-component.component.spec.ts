import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoHomeBodyComponentComponent } from './todo-home-body-component.component';

describe('TodoHomeBodyComponentComponent', () => {
  let component: TodoHomeBodyComponentComponent;
  let fixture: ComponentFixture<TodoHomeBodyComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoHomeBodyComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoHomeBodyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
