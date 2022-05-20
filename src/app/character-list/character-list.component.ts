import { Component,  Input} from '@angular/core';
import { CharactersService } from '../shared/services/characters.service';
import {debounce} from "lodash";
@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent {
  charactersValue ="";
  constructor(private service : CharactersService) { }
  value: string="";
 @Input() characters: any = [];
//  @Input() cardData: any=[this.characters];
 onChange (e:any){
  
  this.charactersByName(e)
 }


 debouncedOnChange =debounce(this.onChange, 250, { 'maxWait': 1000 });

 charactersByName(name:string){
 
  this.service.getCharacters(name).subscribe(resp => {
   this.characters = resp;
})

}

setValue(){
  
  this.value="";
  console.log(this.charactersValue );
 
}




}
