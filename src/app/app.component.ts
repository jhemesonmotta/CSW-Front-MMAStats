import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DataService } from './services/norris/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: any;

  constructor(updates: SwUpdate, private data: DataService) {
    updates.available.subscribe(event => {
      // recarrega a página se houverem updates
      updates.activateUpdate().then(() => document.location.reload());
    });
  }

  ngOnInit() {
    this.data.gimmeJokes().subscribe((response) => {
      this.title = response.value;
      console.log('this.title');
      console.log(this.title);
    });
  }
}
