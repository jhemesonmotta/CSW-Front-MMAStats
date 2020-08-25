import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarBandaComponent } from './visualizar-banda.component';

describe('VisualizarBandaComponent', () => {
  let component: VisualizarBandaComponent;
  let fixture: ComponentFixture<VisualizarBandaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarBandaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarBandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
