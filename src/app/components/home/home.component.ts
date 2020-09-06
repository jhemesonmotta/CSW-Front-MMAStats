import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  viewcol6: any[] = [480, 200];
  viewcolGauge: any[] = [680, 230];
  legenda: 'Legenda';

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  totalLutas: Array<any> = [
    {
      name: 'KO/TKO',
      value: 1202
    },
    {
      name: 'Finalização',
      value: 726
    },
    {
      name: 'Decisão',
      value: 2102
    },
    {
      name: 'Empate/NC',
      value: 142
    }
  ];

  totalLutadores: Array<any> = [
    {
      name: 'USA',
      value: 612
    },
    {
      name: 'Brazil',
      value: 370
    },
    {
      name: 'Russia',
      value: 104
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onSelect(event) {
    console.log('event');
    console.log(event);
  }

}
