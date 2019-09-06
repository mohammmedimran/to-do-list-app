import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoheaderComponent } from './todoheader.component';

describe('TodoheaderComponent', () => {
  let component: TodoheaderComponent;
  let fixture: ComponentFixture<TodoheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
