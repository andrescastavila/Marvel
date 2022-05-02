import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../shared/services/characters.service';
import { Character } from '../shared/models/characters/Character';
import { Observable,of } from 'rxjs';




@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  // characters: Character[]=[];

  public characters:Character[] = [];

  constructor(private characterService:CharactersService) { }


  ngOnInit(): void {
    this.characterService.getCharacters()
    .subscribe(res=>{
      this.characters=res;
    });
  }


  
}
