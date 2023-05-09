import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressoUsuarioComponent } from './progresso-usuario.component';

describe('ProgressoUsuarioComponent', () => {
  let component: ProgressoUsuarioComponent;
  let fixture: ComponentFixture<ProgressoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressoUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
