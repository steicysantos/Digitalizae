import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliarCandidatosComponent } from './avaliar-candidatos.component';

describe('AvaliarCandidatosComponent', () => {
  let component: AvaliarCandidatosComponent;
  let fixture: ComponentFixture<AvaliarCandidatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliarCandidatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaliarCandidatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
