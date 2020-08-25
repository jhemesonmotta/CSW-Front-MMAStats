import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEnsaioComponent } from './cadastro-ensaio.component';

describe('CadastroEnsaioComponent', () => {
  let component: CadastroEnsaioComponent;
  let fixture: ComponentFixture<CadastroEnsaioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroEnsaioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroEnsaioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
