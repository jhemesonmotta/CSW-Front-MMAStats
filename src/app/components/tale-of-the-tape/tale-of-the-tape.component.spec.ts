import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { KendoInput } from '@progress/kendo-angular-common';
import { ComboBoxComponent, ComboBoxModule } from '@progress/kendo-angular-dropdowns';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LutadoresService } from 'src/app/services/lutadores/lutadores.service';
import { LoaderComponent } from '../partials/loader/loader.component';

import { TaleOfTheTapeComponent } from './tale-of-the-tape.component';

describe('TaleOfTheTapeComponent', () => {
  let component: TaleOfTheTapeComponent;
  let fixture: ComponentFixture<TaleOfTheTapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaleOfTheTapeComponent, LoaderComponent ],
      imports: [
        FormsModule,
        NgxChartsModule,
        HttpClientModule,
        ComboBoxModule
      ],
      providers: [
        LutadoresService
      ]
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
