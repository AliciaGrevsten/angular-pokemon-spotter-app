import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPokemonComponent } from './register-pokemon.component';

describe('RegisterPokemonComponent', () => {
  let component: RegisterPokemonComponent;
  let fixture: ComponentFixture<RegisterPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
