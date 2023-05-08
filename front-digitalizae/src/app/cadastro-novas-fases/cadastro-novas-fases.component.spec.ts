import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroNovasFasesComponent } from './cadastro-novas-fases.component';

describe('CadastroNovasFasesComponent', () => {
  let component: CadastroNovasFasesComponent;
  let fixture: ComponentFixture<CadastroNovasFasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroNovasFasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroNovasFasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
