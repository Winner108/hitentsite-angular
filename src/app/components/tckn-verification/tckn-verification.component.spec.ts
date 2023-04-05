import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcknVerificationComponent } from './tckn-verification.component';

describe('TcknVerificationComponent', () => {
  let component: TcknVerificationComponent;
  let fixture: ComponentFixture<TcknVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcknVerificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcknVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
