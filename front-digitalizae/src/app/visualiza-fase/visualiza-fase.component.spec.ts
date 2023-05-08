import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizaFaseComponent } from './visualiza-fase.component';

describe('VisualizaFaseComponent', () => {
  let component: VisualizaFaseComponent;
  let fixture: ComponentFixture<VisualizaFaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizaFaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizaFaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
