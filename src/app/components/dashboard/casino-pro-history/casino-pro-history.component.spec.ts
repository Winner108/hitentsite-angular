import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasinoProHistoryComponent } from './casino-pro-history.component';

describe('CasinoProHistoryComponent', () => {
  let component: CasinoProHistoryComponent;
  let fixture: ComponentFixture<CasinoProHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasinoProHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasinoProHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
