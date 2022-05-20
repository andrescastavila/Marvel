import { Component,  Input, SimpleChanges} from '@angular/core';
import { CharactersService } from '../../shared/services/characters.service';
import {debounce} from "lodash";
import { ICard } from '../card/card.component';
import { Character } from 'src/app/shared/models/characters/Character';
@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent {
  charactersValue ="";
  constructor(private service : CharactersService) { }
  value: string="";
 @Input() characters: Character[] = [];
 @Input() elements: ICard[] = [];
//  @Input() cardData: any=[this.characters];




 onChange (e:any){
  this.charactersByName(e)
 }

 ngOnChanges(changes: SimpleChanges) {

  this.elements = this.characters.map((item:any)=> ({
    title:item.name,
    modified:item.modified,
   thumbnailExtension:item.thumbnail.extension,
   thumbnailUrl:item.thumbnail.path
 }))

    }


 debouncedOnChange =debounce(this.onChange, 250, { 'maxWait': 1000 });

 charactersByName(name:string){
  console.log("charactersByName")
  this.service.getCharacters(name).subscribe(resp => {
   this.characters = resp;
   this.elements = resp.map(item => ({
     title:item.name,
     modified:item.modified,
    thumbnailExtension:item.thumbnail.extension,
    thumbnailUrl:item.thumbnail.path
  }))
    console.log(this.elements)
  })

}

setValue(){

  this.value="";
  console.log(this.charactersValue );

}




}
