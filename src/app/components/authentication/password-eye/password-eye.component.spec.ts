import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordEyeComponent } from './password-eye.component';

describe('PasswordEyeComponent', () => {
  let component: PasswordEyeComponent;
  let fixture: ComponentFixture<PasswordEyeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordEyeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordEyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
