import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import * as NodeParser from 'node-html-parser';

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
    this.scrape();
  }

  onSelect(event) {
    console.log('event');
    console.log(event);
  }

  private scrape() {
    console.log('scrape()');

    const AxiosInstance = axios.create();
    const url = 'https://github.com/MisterBooo/LeetCodeAnimation/graphs/contributors';

    AxiosInstance.get(url).then((response) => {
        const txtHtml = response.data;
        const parsedHtml = NodeParser.parse(txtHtml);

        console.log('parsedHtml');
        console.log(parsedHtml.querySelector('.contrib-person'));

    }).catch(console.error); // Error handling
  }

}
