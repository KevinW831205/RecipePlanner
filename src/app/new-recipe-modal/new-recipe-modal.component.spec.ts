import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRecipeModalComponent } from './new-recipe-modal.component';

describe('NewRecipeModalComponent', () => {
  let component: NewRecipeModalComponent;
  let fixture: ComponentFixture<NewRecipeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRecipeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRecipeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
