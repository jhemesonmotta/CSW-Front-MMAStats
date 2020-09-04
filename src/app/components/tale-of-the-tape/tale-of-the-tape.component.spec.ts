import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaleOfTheTapeComponent } from './tale-of-the-tape.component';

describe('TaleOfTheTapeComponent', () => {
  let component: TaleOfTheTapeComponent;
  let fixture: ComponentFixture<TaleOfTheTapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaleOfTheTapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaleOfTheTapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
