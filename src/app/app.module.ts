import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/norris/data.service';
import { TaleOfTheTapeComponent } from './components/tale-of-the-tape/tale-of-the-tape.component';
import { RankingsBaseComponent } from './components/rankings/rankings-base/rankings-base.component';
import { RankingsLutadoresComponent } from './components/rankings/rankings-lutadores/rankings-lutadores.component';
import { RankingsAcademiasComponent } from './components/rankings/rankings-academias/rankings-academias.component';
import { RankingsNacoesComponent } from './components/rankings/rankings-nacoes/rankings-nacoes.component';

@NgModule({
  declarations: [
    AppComponent,
    TaleOfTheTapeComponent,
    RankingsBaseComponent,
    RankingsLutadoresComponent,
    RankingsAcademiasComponent,
    RankingsNacoesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
