import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginModalContentComponent } from './login-modal-content.component';

describe('LoginModalContentComponent', () => {
  let component: LoginModalContentComponent;
  let fixture: ComponentFixture<LoginModalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginModalContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
