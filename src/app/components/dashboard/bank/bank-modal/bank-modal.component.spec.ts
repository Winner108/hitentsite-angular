/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BankModalComponent } from './bank-modal.component';

describe('BankModalComponent', () => {
  let component: BankModalComponent;
  let fixture: ComponentFixture<BankModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
