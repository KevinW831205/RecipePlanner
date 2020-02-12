import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltererComponent } from './filterer.component';

describe('FiltererComponent', () => {
  let component: FiltererComponent;
  let fixture: ComponentFixture<FiltererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
