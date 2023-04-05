import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvGamesComponent } from './tv-games.component';

describe('TvGamesComponent', () => {
  let component: TvGamesComponent;
  let fixture: ComponentFixture<TvGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
