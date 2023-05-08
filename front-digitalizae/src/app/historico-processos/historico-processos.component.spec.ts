import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoProcessosComponent } from './historico-processos.component';

describe('HistoricoProcessosComponent', () => {
  let component: HistoricoProcessosComponent;
  let fixture: ComponentFixture<HistoricoProcessosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoProcessosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoProcessosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
