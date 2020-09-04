import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpottingRankingsComponent } from './spotting-rankings.component';

describe('SpottingRankingsComponent', () => {
  let component: SpottingRankingsComponent;
  let fixture: ComponentFixture<SpottingRankingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpottingRankingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpottingRankingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
