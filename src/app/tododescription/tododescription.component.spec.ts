import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TododescriptionComponent } from './tododescription.component';

describe('TododescriptionComponent', () => {
  let component: TododescriptionComponent;
  let fixture: ComponentFixture<TododescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TododescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TododescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
