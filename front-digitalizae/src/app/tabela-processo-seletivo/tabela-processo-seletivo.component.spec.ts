import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaProcessoSeletivoComponent } from './tabela-processo-seletivo.component';

describe('TabelaProcessoSeletivoComponent', () => {
  let component: TabelaProcessoSeletivoComponent;
  let fixture: ComponentFixture<TabelaProcessoSeletivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaProcessoSeletivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaProcessoSeletivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
