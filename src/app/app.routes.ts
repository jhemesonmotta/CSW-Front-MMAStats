import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { RankingsBaseComponent } from './components/rankings/rankings-base/rankings-base.component';
import { RankingsNacoesComponent } from './components/rankings/rankings-nacoes/rankings-nacoes.component';
import { RankingsLutadoresComponent } from './components/rankings/rankings-lutadores/rankings-lutadores.component';
import { RankingsAcademiasComponent } from './components/rankings/rankings-academias/rankings-academias.component';
import { TaleOfTheTapeComponent } from './components/tale-of-the-tape/tale-of-the-tape.component';
import { SaibaMaisComponent } from './components/saiba-mais/saiba-mais.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'rankings',
        component: RankingsBaseComponent
    },
    {
        path: 'rankings/nacoes',
        component: RankingsNacoesComponent
    },
    {
        path: 'rankings/lutadores',
        component: RankingsLutadoresComponent
    },
    {
        path: 'rankings/academias',
        component: RankingsAcademiasComponent
    },
    {
        path: 'tale-of-the-tape',
        component: TaleOfTheTapeComponent
    },
    {
        path: 'saiba-mais',
        component: SaibaMaisComponent
    }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(ROUTES);
