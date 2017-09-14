// OnInit imported from core library
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title: string;
  name: string;
  // values assigned to variables in ngOnInit
  ngOnInit() {
    this.title = 'angular binding';
    this.name = 'my-app';
    console.log('ngoninit called!');
  }
}
