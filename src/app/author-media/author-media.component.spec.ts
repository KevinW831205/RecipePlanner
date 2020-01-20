import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorMediaComponent } from './author-media.component';

describe('AuthorMediaComponent', () => {
  let component: AuthorMediaComponent;
  let fixture: ComponentFixture<AuthorMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
