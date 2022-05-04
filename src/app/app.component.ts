import { Component, OnInit } from '@angular/core';
import { CharactersService } from './shared/services/characters.service';
import { CharactersComponent } from './characters/characters.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 
export class AppComponent {
  title = 'MarvelApp';
 
  constructor( ){

  }


}
