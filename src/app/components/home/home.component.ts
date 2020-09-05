import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  viewcol6: any[] = [480, 200];

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

  constructor() { }

  ngOnInit() {
  }

  onSelect(event) {
    console.log('event');
    console.log(event);
  }

}
