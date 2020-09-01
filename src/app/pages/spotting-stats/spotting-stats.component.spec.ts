import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpottingStatsComponent } from './spotting-stats.component';

describe('SpottingStatsComponent', () => {
  let component: SpottingStatsComponent;
  let fixture: ComponentFixture<SpottingStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpottingStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpottingStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
