import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingsBaseComponent } from './rankings-base.component';

describe('RankingsBaseComponent', () => {
  let component: RankingsBaseComponent;
  let fixture: ComponentFixture<RankingsBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingsBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingsBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
