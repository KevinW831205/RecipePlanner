import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTagsPageComponent } from './category-tags-page.component';

describe('CategoryTagsPageComponent', () => {
  let component: CategoryTagsPageComponent;
  let fixture: ComponentFixture<CategoryTagsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryTagsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryTagsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
