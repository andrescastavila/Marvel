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


  

  constructor() { }


  ngOnInit(): void {
    
  }


  
}
