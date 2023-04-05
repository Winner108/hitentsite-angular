/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BetgamesTvComponent } from './betgames-tv.component';

describe('BetgamesTvComponent', () => {
  let component: BetgamesTvComponent;
  let fixture: ComponentFixture<BetgamesTvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetgamesTvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetgamesTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
