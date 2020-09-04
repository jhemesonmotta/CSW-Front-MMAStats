import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingsLutadoresComponent } from './rankings-lutadores.component';

describe('RankingsLutadoresComponent', () => {
  let component: RankingsLutadoresComponent;
  let fixture: ComponentFixture<RankingsLutadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingsLutadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingsLutadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
