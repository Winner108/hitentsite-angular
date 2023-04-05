import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdateInputComponent } from './birthdate-input.component';

describe('BirthdateInputComponent', () => {
  let component: BirthdateInputComponent;
  let fixture: ComponentFixture<BirthdateInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthdateInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
