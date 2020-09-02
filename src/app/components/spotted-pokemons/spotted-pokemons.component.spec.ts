import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpottedPokemonsComponent } from './spotted-pokemons.component';

describe('SpottedPokemonsComponent', () => {
  let component: SpottedPokemonsComponent;
  let fixture: ComponentFixture<SpottedPokemonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpottedPokemonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpottedPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
