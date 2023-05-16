import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaCandidatosComponent } from './tabela-candidatos.component';

describe('TabelaCandidatosComponent', () => {
  let component: TabelaCandidatosComponent;
  let fixture: ComponentFixture<TabelaCandidatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaCandidatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaCandidatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
