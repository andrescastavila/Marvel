import { Component, OnInit } from '@angular/core';
import { CharactersService } from './shared/services/characters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MarvelApp';
  characters: any = {};
  constructor(private service: CharactersService ){

  }

  ngOnInit():void{
    this.service.getCharacters().subscribe(resp => {
      this.characters = resp.results;
      console.log(this.characters);
    })
  }
}


