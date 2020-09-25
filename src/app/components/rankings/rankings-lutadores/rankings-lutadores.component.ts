import { Component, OnInit } from '@angular/core';
import { Lutador } from 'src/app/model/lutador';
import { LutadoresService } from 'src/app/services/lutadores/lutadores.service';

@Component({
  selector: 'app-rankings-lutadores',
  templateUrl: './rankings-lutadores.component.html',
  styleUrls: ['./rankings-lutadores.component.css']
})
export class RankingsLutadoresComponent implements OnInit {

  lutadores: Array<Lutador> = [];
  lutadoresFiltrados: Array<Lutador> = [];

  carregando = false;
  qtdMostrada = 20;
  categoria = 'Peso por Peso';

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

  public listaLutadores() {
    if (this.categoria === 'Peso por Peso') {
      this.lutadoresFiltrados = this.lutadores;
    } else {
      this.lutadoresFiltrados = this.lutadores.filter(lutador => lutador.categoria === this.categoria);
    }
    return this.lutadoresFiltrados.slice(0, this.qtdMostrada);
  }

  public carregarMais() {
    console.log('err');
    this.qtdMostrada = this.qtdMostrada + 10;
  }

  public trocaCategoria(categoria: string) {
    this.categoria = categoria;
  }

  private buscarLutadores() {
    this.carregando = true;

    console.log('buscarLutadores');
    this.lutadoresService.buscarLutadores().subscribe((data) => {
      this.lutadores = data.filter(lutador => lutador.score !== null && lutador.score !== -999.999).sort((n1, n2) => {
        if (n1.score > n2.score) {
            return -1;
        }
        if (n1.score < n2.score) {
            return 1;
        }
        return 0;
    });

    console.log('this.lutadores');
    console.log(this.lutadores);

    this.carregando = false;
    }, (error) => {
      console.log('error');
      console.log(error);
      this.carregando = false;
    });
  }

}
