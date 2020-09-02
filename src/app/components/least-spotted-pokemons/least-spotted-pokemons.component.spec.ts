import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeastSpottedPokemonsComponent } from './least-spotted-pokemons.component';

describe('LeastSpottedPokemonsComponent', () => {
  let component: LeastSpottedPokemonsComponent;
  let fixture: ComponentFixture<LeastSpottedPokemonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeastSpottedPokemonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeastSpottedPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
