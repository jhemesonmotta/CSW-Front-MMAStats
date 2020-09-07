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
import { ContatoComponent } from './components/contato/contato.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { SidebarComponent } from './components/partials/sidebar/sidebar.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { routes } from './app.routes';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SaibaMaisComponent } from './components/saiba-mais/saiba-mais.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { EventoService } from './services/eventos/eventos.service';
import { LutadoresService } from './services/lutadores/lutadores.service';
import { LutaService } from './services/lutas/lutas.service';
import { OrganizacaoService } from './services/organizacoes/organizacoes.service';


@NgModule({
  declarations: [
    AppComponent,
    TaleOfTheTapeComponent,
    RankingsBaseComponent,
    RankingsLutadoresComponent,
    RankingsAcademiasComponent,
    RankingsNacoesComponent,
    ContatoComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    SaibaMaisComponent,
  ],
  imports: [
    routes,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    DropDownsModule
  ],
  providers: [
    DataService,
    EventoService,
    LutadoresService,
    LutaService,
    OrganizacaoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
