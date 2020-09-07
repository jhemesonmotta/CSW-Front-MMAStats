import {Component, OnInit, ViewChild} from '@angular/core';
import { Lutador } from 'src/app/model/lutador';
import { ComboBoxComponent } from '@progress/kendo-angular-dropdowns';
import { ModeloDadosComparacao } from 'src/app/model/modeloDadosComparacao';
import { LutadoresService } from 'src/app/services/lutadores/lutadores.service';

@Component({
  selector: 'app-tale-of-the-tape',
  templateUrl: './tale-of-the-tape.component.html',
  styleUrls: ['./tale-of-the-tape.component.css']
})
export class TaleOfTheTapeComponent implements OnInit {
  @ViewChild('combo', {static: true}) public combo: ComboBoxComponent;

  listaLutadores: Array<Lutador> = [];
  public selecionado1: Lutador;
  public selecionado2: Lutador;

  public comboboxData: Array<Lutador> = [];
  public source: Array<Lutador> = [];

  dadosComparacao: ModeloDadosComparacao[] = [];

  constructor(public lutadoresService: LutadoresService) {}

  ngOnInit() {
    this.buscarLutadores();
  }

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
      name: 'V. por Finalização',
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
      name: 'D. por Finalização',
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

  private buscarLutadores() {
    console.log('buscarLutadores');
    this.lutadoresService.buscarLutadores().subscribe((data) => {
      console.log('data');
      console.log(data);
      this.source = data;
      this.comboboxData = this.source.slice();
    }, (error) => {
      console.log(error);
    });
  }
}
