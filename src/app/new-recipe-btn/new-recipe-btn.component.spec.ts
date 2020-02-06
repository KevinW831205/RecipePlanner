import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRecipeBtnComponent } from './new-recipe-btn.component';

describe('NewRecipeBtnComponent', () => {
  let component: NewRecipeBtnComponent;
  let fixture: ComponentFixture<NewRecipeBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRecipeBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRecipeBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
