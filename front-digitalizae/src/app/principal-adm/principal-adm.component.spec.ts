import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalAdmComponent } from './principal-adm.component';

describe('PrincipalAdmComponent', () => {
  let component: PrincipalAdmComponent;
  let fixture: ComponentFixture<PrincipalAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalAdmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
