import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/norris/data.service';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CadastroFuncoesComponent } from './components/admin-components/cadastro-funcoes/cadastro-funcoes.component';
import { CadastroHorariosComponent } from './components/admin-components/cadastro-horarios/cadastro-horarios.component';
import { CadastroUsuarioComponent } from './components/usuario/cadastro-usuario/cadastro-usuario.component';
import { CadastroBandaComponent } from './components/banda/cadastro-banda/cadastro-banda.component';
import { CadastroEnsaioComponent } from './components/ensaio/cadastro-ensaio/cadastro-ensaio.component';
import { VisualizarEnsaioComponent } from './components/ensaio/visualizar-ensaio/visualizar-ensaio.component';
import { VisualizarBandaComponent } from './components/banda/visualizar-banda/visualizar-banda.component';
import { VisualizarUsuarioComponent } from './components/usuario/visualizar-usuario/visualizar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CadastroFuncoesComponent,
    CadastroHorariosComponent,
    CadastroUsuarioComponent,
    CadastroBandaComponent,
    CadastroEnsaioComponent,
    VisualizarEnsaioComponent,
    VisualizarBandaComponent,
    VisualizarUsuarioComponent
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
