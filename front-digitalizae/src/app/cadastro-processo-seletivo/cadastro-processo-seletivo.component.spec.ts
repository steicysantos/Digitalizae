import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroProcessoSeletivoComponent } from './cadastro-processo-seletivo.component';

describe('CadastroProcessoSeletivoComponent', () => {
  let component: CadastroProcessoSeletivoComponent;
  let fixture: ComponentFixture<CadastroProcessoSeletivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroProcessoSeletivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroProcessoSeletivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
