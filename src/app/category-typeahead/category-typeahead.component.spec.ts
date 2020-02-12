import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTypeaheadComponent } from './category-typeahead.component';

describe('CategoryTypeaheadComponent', () => {
  let component: CategoryTypeaheadComponent;
  let fixture: ComponentFixture<CategoryTypeaheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryTypeaheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryTypeaheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
