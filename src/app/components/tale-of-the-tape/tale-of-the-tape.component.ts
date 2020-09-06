import { Component, OnInit, ViewChild } from '@angular/core';
import { Lutador } from 'src/app/model/lutador';
import { ComboBoxComponent } from '@progress/kendo-angular-dropdowns';
import { ModeloDadosComparacao } from 'src/app/model/modeloDadosComparacao';

@Component({
  selector: 'app-tale-of-the-tape',
  templateUrl: './tale-of-the-tape.component.html',
  styleUrls: ['./tale-of-the-tape.component.css']
})
export class TaleOfTheTapeComponent implements OnInit {
  @ViewChild('combo') public combo: ComboBoxComponent;

  listaLutadores: Array<Lutador> = [];
  public selecionado1: Lutador;
  public selecionado2: Lutador;

  public comboboxData: Array<Lutador>;
  public source: Array<Lutador> = [
    {id: 1,
    nome: 'Jon Jones',
    foto: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/20140714113923_1MG_7562.JPG',
    apelido: 'Bones',
    pais: 'United States',
    idade: 34,
    altura: 193,
    peso: 93.5,
    categoria: 'Meio Pesado',
    equipe: 'ELEVATION FIGHT TEAM',
    vitorias_ko: 10,
    vitorias_sub: 5,
    vitorias_dec: 12,
    vitorias_outras: 0,
    derrotas_ko: 0,
    derrotas_sub: 0,
    derrotas_dec: 0,
    derrotas_outras: 1,
    empates_nc: 1},

    {id: 2,
    nome: 'Ryan Bader',
    foto: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/20170627034721_1DX_1121.JPG',
    apelido: 'Darth',
    pais: 'United States',
    idade: 38,
    altura: 198,
    peso: 93.5,
    categoria: 'Meio Pesado',
    equipe: 'AMERICAN TOP TEAM',
    vitorias_ko: 15,
    vitorias_sub: 1,
    vitorias_dec: 7,
    vitorias_outras: 0,
    derrotas_ko: 4,
    derrotas_sub: 1,
    derrotas_dec: 2,
    derrotas_outras: 0,
    empates_nc: 1},

    {id: 3,
    nome: 'Amanda Nunes',
    foto: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/20160929035240_nunes.JPG',
    apelido: 'Leoa',
    pais: 'Brazil',
    idade: 30,
    altura: 175,
    peso: 63.5,
    categoria: 'Galo',
    equipe: 'Teste',
    vitorias_ko: 10,
    vitorias_sub: 5,
    vitorias_dec: 12,
    vitorias_outras: 0,
    derrotas_ko: 0,
    derrotas_sub: 0,
    derrotas_dec: 0,
    derrotas_outras: 1,
    empates_nc: 1}
  ];


  dadosComparacao: ModeloDadosComparacao[] = [];

  constructor() {
    this.comboboxData = this.source.slice();
  }

  ngOnInit() {}

  handleFilter(value) {
    if (value.length >= 3) {
        this.comboboxData = this.source.filter((s) => s.nome.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    } else {
        this.combo.toggle(false);
    }
  }

  onSelect(event) {
    console.log(event);
  }

  mostraTOTT() {
    if (this.selecionado1 && this.selecionado2 && this.selecionado1.id && this.selecionado2.id) {
      this.preencheGraficos();
      return true;
    }
    return false;
  }

  preencheGraficos() {

    let vitorias: ModeloDadosComparacao = {
      name: 'Vitórias',
      series: [
        {
          name: this.selecionado1.nome,
          value: this.selecionado1.vitorias_ko + this.selecionado1.vitorias_sub +
                  this.selecionado1.vitorias_dec + this.selecionado1.vitorias_outras,
        }, {
          name: this.selecionado2.nome,
          value: this.selecionado2.vitorias_ko + this.selecionado2.vitorias_sub +
                  this.selecionado2.vitorias_dec + this.selecionado2.vitorias_outras,
        }
      ]
    };
    let vitorias_ko: ModeloDadosComparacao = {
      name: 'V. por KO/TKO',
      series: [
        {
          name: this.selecionado1.nome,
          value: this.selecionado1.vitorias_ko,
        }, {
          name: this.selecionado2.nome,
          value: this.selecionado2.vitorias_ko,
        }
      ]
    };
    let vitorias_sub: ModeloDadosComparacao = {
      name: 'V. por Submissão',
      series: [
        {
          name: this.selecionado1.nome,
          value: this.selecionado1.vitorias_sub,
        }, {
          name: this.selecionado2.nome,
          value: this.selecionado2.vitorias_sub,
        }
      ]
    };
    let vitorias_dec: ModeloDadosComparacao = {
      name: 'V. por Decisão',
      series: [
        {
          name: this.selecionado1.nome,
          value: this.selecionado1.vitorias_dec,
        }, {
          name: this.selecionado2.nome,
          value: this.selecionado2.vitorias_dec,
        }
      ]
    };
    let vitorias_outras: ModeloDadosComparacao = {
      name: 'Outras Vitórias',
      series: [
        {
          name: this.selecionado1.nome,
          value: this.selecionado1.vitorias_outras,
        }, {
          name: this.selecionado2.nome,
          value: this.selecionado2.vitorias_outras,
        }
      ]
    };
    let derrotas: ModeloDadosComparacao = {
      name: 'Derrotas',
      series: [
        {
          name: this.selecionado1.nome,
          value: this.selecionado1.derrotas_ko + this.selecionado1.derrotas_sub +
                  this.selecionado1.derrotas_dec + this.selecionado1.derrotas_outras
        }, {
          name: this.selecionado2.nome,
          value: this.selecionado2.derrotas_ko + this.selecionado2.derrotas_sub +
                  this.selecionado2.derrotas_dec + this.selecionado2.derrotas_outras
        }
      ]
    };
    let derrotas_ko: ModeloDadosComparacao = {
      name: 'D. por KO/TKO',
      series: [
        {
          name: this.selecionado1.nome,
          value: this.selecionado1.derrotas_ko,
        }, {
          name: this.selecionado2.nome,
          value: this.selecionado2.derrotas_ko,
        }
      ]
    };
    let derrotas_sub: ModeloDadosComparacao = {
      name: 'D. por Submissão',
      series: [
        {
          name: this.selecionado1.nome,
          value: this.selecionado1.derrotas_sub,
        }, {
          name: this.selecionado2.nome,
          value: this.selecionado2.derrotas_sub,
        }
      ]
    };
    let derrotas_dec: ModeloDadosComparacao = {
      name: 'D. por Decisão',
      series: [
        {
          name: this.selecionado1.nome,
          value: this.selecionado1.derrotas_dec,
        }, {
          name: this.selecionado2.nome,
          value: this.selecionado2.derrotas_dec,
        }
      ]
    };
    let derrotas_outras: ModeloDadosComparacao = {
      name: 'Outras Derrotas',
      series: [
        {
          name: this.selecionado1.nome,
          value: this.selecionado1.derrotas_outras,
        }, {
          name: this.selecionado2.nome,
          value: this.selecionado2.derrotas_outras,
        }
      ]
    };
    let empates_nc: ModeloDadosComparacao = {
      name: 'Empates/NC',
      series: [
        {
          name: this.selecionado1.nome,
          value: this.selecionado1.empates_nc,
        }, {
          name: this.selecionado2.nome,
          value: this.selecionado2.empates_nc,
        }
      ]
    };

    this.dadosComparacao = [
      vitorias,
      vitorias_ko,
      vitorias_sub,
      vitorias_dec,
      vitorias_outras,
      derrotas,
      derrotas_ko,
      derrotas_sub,
      derrotas_dec,
      derrotas_outras,
      empates_nc,
    ];
  }
}
