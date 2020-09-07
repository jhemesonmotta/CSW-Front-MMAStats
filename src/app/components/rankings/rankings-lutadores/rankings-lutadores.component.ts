import { Component, OnInit } from '@angular/core';
import { LutadoresService } from 'src/app/services/lutadores/lutadores.service';

@Component({
  selector: 'app-rankings-lutadores',
  templateUrl: './rankings-lutadores.component.html',
  styleUrls: ['./rankings-lutadores.component.css']
})
export class RankingsLutadoresComponent implements OnInit {

  constructor(public lutadoresService: LutadoresService) { }

  ngOnInit() {
    this.buscarLutadores();
  }

  private buscarLutadores() {
    console.log('buscarLutadores');
    this.lutadoresService.buscarLutadores().subscribe((data) => {
      console.log('data');
      console.log(data);
    }, (error) => {
      console.log(error);
    });
  }

}
