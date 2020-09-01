import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnseenPokemonsComponent } from './unseen-pokemons.component';

describe('UnseenPokemonsComponent', () => {
  let component: UnseenPokemonsComponent;
  let fixture: ComponentFixture<UnseenPokemonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnseenPokemonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnseenPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
