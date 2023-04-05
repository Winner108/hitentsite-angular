import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositWithdrawMoneyComponent } from './deposit-withdraw-money.component';

describe('DepositWithdrawMoneyComponent', () => {
  let component: DepositWithdrawMoneyComponent;
  let fixture: ComponentFixture<DepositWithdrawMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositWithdrawMoneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositWithdrawMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
