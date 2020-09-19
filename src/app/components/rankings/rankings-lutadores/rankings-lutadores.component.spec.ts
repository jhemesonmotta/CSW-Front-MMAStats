import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LutadoresService } from 'src/app/services/lutadores/lutadores.service';

import { RankingsLutadoresComponent } from './rankings-lutadores.component';

describe('RankingsLutadoresComponent', () => {
  let component: RankingsLutadoresComponent;
  let fixture: ComponentFixture<RankingsLutadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingsLutadoresComponent ],
      imports: [
        HttpClientModule
      ],
      providers: [
        LutadoresService
      ]
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
