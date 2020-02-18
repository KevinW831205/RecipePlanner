import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupSuccessModalComponent } from './signup-success-modal.component';

describe('SignupSuccessModalComponent', () => {
  let component: SignupSuccessModalComponent;
  let fixture: ComponentFixture<SignupSuccessModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupSuccessModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupSuccessModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
