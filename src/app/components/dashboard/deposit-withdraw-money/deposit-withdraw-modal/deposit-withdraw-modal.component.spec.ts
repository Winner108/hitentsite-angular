import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositWithdrawModalComponent } from './deposit-withdraw-modal.component';

describe('DepositWithdrawModalComponent', () => {
  let component: DepositWithdrawModalComponent;
  let fixture: ComponentFixture<DepositWithdrawModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositWithdrawModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositWithdrawModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
