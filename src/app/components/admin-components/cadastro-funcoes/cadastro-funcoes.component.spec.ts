import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroFuncoesComponent } from './cadastro-funcoes.component';

describe('CadastroFuncoesComponent', () => {
  let component: CadastroFuncoesComponent;
  let fixture: ComponentFixture<CadastroFuncoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroFuncoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroFuncoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
