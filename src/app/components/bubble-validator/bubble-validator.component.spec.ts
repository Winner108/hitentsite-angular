import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleValidatorComponent } from './bubble-validator.component';

describe('BubbleValidatorComponent', () => {
  let component: BubbleValidatorComponent;
  let fixture: ComponentFixture<BubbleValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BubbleValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BubbleValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
