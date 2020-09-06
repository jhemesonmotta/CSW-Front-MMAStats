import { Component, OnInit, ViewChild } from '@angular/core';
import { Lutador } from 'src/app/model/lutador';
import { ComboBoxComponent } from '@progress/kendo-angular-dropdowns';

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
    derrotas_dec: 0,
    derrotas_outras: 1,
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

  mostraTOTT() {
    if (this.selecionado1 && this.selecionado2 && this.selecionado1.id && this.selecionado2.id) {
      return true;
    }
    return false;
  }
}
