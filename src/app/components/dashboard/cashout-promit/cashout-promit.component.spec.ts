import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashoutPromitComponent } from './cashout-promit.component';

describe('CashoutPromitComponent', () => {
  let component: CashoutPromitComponent;
  let fixture: ComponentFixture<CashoutPromitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashoutPromitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashoutPromitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
