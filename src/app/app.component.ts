import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DataService } from './services/norris/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(updates: SwUpdate) {
    updates.available.subscribe(event => {
      // recarrega a página se houverem updates
      updates.activateUpdate().then(() => document.location.reload());
    });
  }

  ngOnInit() {
  }
}
