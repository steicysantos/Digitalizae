import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocalProvaComponent } from './local-prova.component';

describe('LocalProvaComponent', () => {
  let component: LocalProvaComponent;
  let fixture: ComponentFixture<LocalProvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalProvaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalProvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
