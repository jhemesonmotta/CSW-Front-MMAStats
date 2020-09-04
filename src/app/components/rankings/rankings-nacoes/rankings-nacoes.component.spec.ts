import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingsNacoesComponent } from './rankings-nacoes.component';

describe('RankingsNacoesComponent', () => {
  let component: RankingsNacoesComponent;
  let fixture: ComponentFixture<RankingsNacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingsNacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingsNacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
