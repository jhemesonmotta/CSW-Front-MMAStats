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
    url_foto: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/20140714113923_1MG_7562.JPG',
    apelido: 'Bones',
    pais: 'United States',
    idade: 34,
    altura: 193,
    peso: 93.5,
    categoria: 'Meio Pesado',
    equipe: 'ELEVATION FIGHT TEAM',
    v_kotko: 10,
    v_submissao: 5,
    v_decisao: 12,
    d_ko_tko: 0,
    d_submissao: 0,
    d_decisao: 0,
    empates: 1},

    {id: 2,
    nome: 'Ryan Bader',
    url_foto: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/20170627034721_1DX_1121.JPG',
    apelido: 'Darth',
    pais: 'United States',
    idade: 38,
    altura: 198,
    peso: 93.5,
    categoria: 'Meio Pesado',
    equipe: 'AMERICAN TOP TEAM',
    v_kotko: 15,
    v_submissao: 1,
    v_decisao: 7,
    d_ko_tko: 4,
    d_submissao: 1,
    d_decisao: 2,
    empates: 1},

    {id: 3,
    nome: 'Amanda Nunes',
    url_foto: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/20160929035240_nunes.JPG',
    apelido: 'Leoa',
    pais: 'Brazil',
    idade: 30,
    altura: 175,
    peso: 63.5,
    categoria: 'Galo',
    equipe: 'Teste',
    v_kotko: 10,
    v_submissao: 5,
    v_decisao: 12,
    d_ko_tko: 0,
    d_submissao: 0,
    d_decisao: 0,
    empates: 1}
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

    const vitorias: ModeloDadosComparacao = {
      name: 'Vitórias',
      series: [
        {
          name: this.selecionado1.nome,
          value: this.selecionado1.v_kotko + this.selecionado1.v_submissao +
                  this.selecionado1.v_decisao,
        }, {
          name: this.selecionado2.nome,
          value: this.selecionado2.v_kotko + this.selecionado2.v_submissao +
                  this.selecionado2.v_decisao,
        }
      ]
    };
    const v_kotko: ModeloDadosComparacao = {
      name: 'V. por KO/TKO',
      series: [
        {
          name: this.selecionado1.nome,
          value: this.selecionado1.v_kotko,
        }, {
          name: this.selecionado2.nome,
          value: this.selecionado2.v_kotko,
        }
      ]
    };
    const v_submissao: ModeloDadosComparacao = {
      name: 'V. por Submissão',
      series: [
        {
          name: this.selecionado1.nome,
          value: this.selecionado1.v_submissao,
        }, {
          name: this.selecionado2.nome,
          value: this.selecionado2.v_submissao,
        }
      ]
    };
    const v_decisao: ModeloDadosComparacao = {
      name: 'V. por Decisão',
      series: [
        {
          name: this.selecionado1.nome,
          value: this.selecionado1.v_decisao,
        }, {
          name: this.selecionado2.nome,
          value: this.selecionado2.v_decisao,
        }
      ]
    };
    const derrotas: ModeloDadosComparacao = {
      name: 'Derrotas',
      series: [
        {
          name: this.selecionado1.nome,
          value: this.selecionado1.d_ko_tko + this.selecionado1.d_submissao +
                  this.selecionado1.d_decisao
        }, {
          name: this.selecionado2.nome,
          value: this.selecionado2.d_ko_tko + this.selecionado2.d_submissao +
                  this.selecionado2.d_decisao
        }
      ]
    };
    const d_ko_tko: ModeloDadosComparacao = {
      name: 'D. por KO/TKO',
      series: [
        {
          name: this.selecionado1.nome,
          value: this.selecionado1.d_ko_tko,
        }, {
          name: this.selecionado2.nome,
          value: this.selecionado2.d_ko_tko,
        }
      ]
    };
    const d_submissao: ModeloDadosComparacao = {
      name: 'D. por Submissão',
      series: [
        {
          name: this.selecionado1.nome,
          value: this.selecionado1.d_submissao,
        }, {
          name: this.selecionado2.nome,
          value: this.selecionado2.d_submissao,
        }
      ]
    };
    const d_decisao: ModeloDadosComparacao = {
      name: 'D. por Decisão',
      series: [
        {
          name: this.selecionado1.nome,
          value: this.selecionado1.d_decisao,
        }, {
          name: this.selecionado2.nome,
          value: this.selecionado2.d_decisao,
        }
      ]
    };
    const empates: ModeloDadosComparacao = {
      name: 'Empates/NC',
      series: [
        {
          name: this.selecionado1.nome,
          value: this.selecionado1.empates,
        }, {
          name: this.selecionado2.nome,
          value: this.selecionado2.empates,
        }
      ]
    };

    this.dadosComparacao = [
      vitorias,
      v_kotko,
      v_submissao,
      v_decisao,
      derrotas,
      d_ko_tko,
      d_submissao,
      d_decisao,
      empates,
    ];
  }
}
