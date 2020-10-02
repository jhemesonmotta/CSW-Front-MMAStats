import { Component, OnInit } from '@angular/core';
import { Equipe } from 'src/app/model/equipe';
import { Lutador } from 'src/app/model/lutador';
import { LutadoresService } from 'src/app/services/lutadores/lutadores.service';

@Component({
  selector: 'app-rankings-academias',
  templateUrl: './rankings-academias.component.html',
  styleUrls: ['./rankings-academias.component.css']
})
export class RankingsAcademiasComponent implements OnInit {

  lutadores: Array<Lutador> = [];
  lutadoresFiltrados: Array<Lutador> = [];

  equipesBruto: Array<any> = [];
  equipes: Array<Equipe> = [];

  carregando = false;
  qtdMostrada = 20;

  constructor(public lutadoresService: LutadoresService) { }

  ngOnInit() {
    this.buscarLutadores();
  }

  public decideClasse(index: number) {
    if (index === 0) {
      return 'position-first';
    } else if (index === 1) {
      return 'position-second';
    } else if (index === 2) {
      return 'position-third';
    } else {
      return 'position-other';
    }
  }

  public listaTimes() {
    return this.equipes.slice(0, this.qtdMostrada);
  }

  public carregarMais() {
    this.qtdMostrada = this.qtdMostrada + 10;
  }

  private groupByKey(array, key) {
    return array
      .reduce((hash, obj) => {
        if (obj[key] === undefined) {
          return hash;
        }
        return Object.assign(hash, { [obj[key]]: ( hash[obj[key]] || [] ).concat(obj)});
      }, {});
  }

  private buscarLutadores() {
    this.carregando = true;
    this.lutadoresService.buscarLutadores().subscribe((data) => {
      this.lutadores = data.filter(lutador => lutador.score !== null && lutador.score !== -999.999);

      this.equipesBruto = this.groupByKey(this.lutadores, 'equipe');

      // tslint:disable-next-line: forin
      for (const equipe in this.equipesBruto) {
        const novaEquipe: Equipe = new Equipe();
        novaEquipe.lutadores = this.equipesBruto[equipe];
        novaEquipe.nome = equipe;
        novaEquipe.pontuacao = 0;

        novaEquipe.lutadores.forEach(lutador  => {
          novaEquipe.pontuacao = novaEquipe.pontuacao + lutador.score;
        });


        this.equipes.push(novaEquipe);
      }

      this.equipes = this.equipes.sort((n1, n2) => {
        if (n1.pontuacao > n2.pontuacao) {
            return -1;
        }
        if (n1.pontuacao < n2.pontuacao) {
            return 1;
        }
        return 0;
    });

      this.carregando = false;
    }, (error) => {
      console.log('error');
      console.log(error);
      this.carregando = false;
    });
  }

}
