import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../shared/services/characters.service';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: any = [];

  constructor(private service: CharactersService) { }
  
  ngOnInit(): void {
   this.all();
   this.CharacterId();
  }
  
   all(){
      this.service.getCharacters().subscribe(resp => {
        this.characters = resp;
     })
   }

  CharacterId(){
     this.service.getCharacterById(this.service.characterId)
      .subscribe(res=>{
     this.characters=res;
       });
    }
  
}
