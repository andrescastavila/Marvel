import { Component, OnInit,EventEmitter,Output,Input, AfterContentInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, fromEvent, map, tap } from 'rxjs';
import { CharactersComponent } from '../characters/characters.component';
import { CharactersService } from '../shared/services/characters.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {
 
 
  @Input() characters:any=[];
  @Output() charactersValue = new EventEmitter();
  constructor(private service : CharactersService){}

 
   onChange (e:any){
    this.charactersByName();
   }

   charactersByName(){
    this.service.getCharacters(this.service.name).subscribe(resp => {
     this.characters = resp;
  })
  
  }



  
 
}


