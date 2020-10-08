import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { LutadoresService } from 'src/app/services/lutadores/lutadores.service';
import { LoaderComponent } from '../../partials/loader/loader.component';

import { RankingsLutadoresComponent } from './rankings-lutadores.component';

describe('RankingsLutadoresComponent', () => {
  let component: RankingsLutadoresComponent;
  let fixture: ComponentFixture<RankingsLutadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingsLutadoresComponent, LoaderComponent ],
      imports: [
        FormsModule,
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
