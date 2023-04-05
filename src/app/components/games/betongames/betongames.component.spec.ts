import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetongamesComponent } from './betongames.component';

describe('BetongamesComponent', () => {
  let component: BetongamesComponent;
  let fixture: ComponentFixture<BetongamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetongamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetongamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
