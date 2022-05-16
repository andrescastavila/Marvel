import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


//Create 3 pages
// /characters
// /comics
// /series



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MarvelApp';
  links = [
    { path: '/characters',  title: 'Characters' },
    { path: '/comics', title: 'Comics' },
    { path: '/series', title: 'Series' },
  ];
  constructor( private router : Router){

  }


}
