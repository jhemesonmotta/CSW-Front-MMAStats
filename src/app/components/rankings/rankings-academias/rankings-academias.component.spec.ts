import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingsAcademiasComponent } from './rankings-academias.component';

describe('RankingsAcademiasComponent', () => {
  let component: RankingsAcademiasComponent;
  let fixture: ComponentFixture<RankingsAcademiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingsAcademiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingsAcademiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
