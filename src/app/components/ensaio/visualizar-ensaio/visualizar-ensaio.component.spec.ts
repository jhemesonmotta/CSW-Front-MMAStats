import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarEnsaioComponent } from './visualizar-ensaio.component';

describe('VisualizarEnsaioComponent', () => {
  let component: VisualizarEnsaioComponent;
  let fixture: ComponentFixture<VisualizarEnsaioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarEnsaioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarEnsaioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
