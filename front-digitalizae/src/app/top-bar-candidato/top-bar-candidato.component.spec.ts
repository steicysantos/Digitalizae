import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarCandidatoComponent } from './top-bar-candidato.component';

describe('TopBarCandidatoComponent', () => {
  let component: TopBarCandidatoComponent;
  let fixture: ComponentFixture<TopBarCandidatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBarCandidatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopBarCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
