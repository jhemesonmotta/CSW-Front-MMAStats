import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { LutadoresService } from 'src/app/services/lutadores/lutadores.service';
import { LoaderComponent } from '../../partials/loader/loader.component';

import { RankingsAcademiasComponent } from './rankings-academias.component';

describe('RankingsAcademiasComponent', () => {
  let component: RankingsAcademiasComponent;
  let fixture: ComponentFixture<RankingsAcademiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingsAcademiasComponent, LoaderComponent ],
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
    fixture = TestBed.createComponent(RankingsAcademiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
