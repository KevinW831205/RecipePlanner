import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeStarRatingComponent } from './recipe-star-rating.component';

describe('RecipeStarRatingComponent', () => {
  let component: RecipeStarRatingComponent;
  let fixture: ComponentFixture<RecipeStarRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeStarRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeStarRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
