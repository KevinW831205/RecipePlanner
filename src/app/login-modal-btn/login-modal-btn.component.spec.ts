import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginModalBtnComponent } from './login-modal-btn.component';

describe('LoginModalBtnComponent', () => {
  let component: LoginModalBtnComponent;
  let fixture: ComponentFixture<LoginModalBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginModalBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginModalBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
