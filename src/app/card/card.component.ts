import { Component, EventEmitter, Input, Output } from '@angular/core';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {
  
  constructor() { }

  @Input() characters: any = [];
  @Input() card : any =[this.characters];
   
  
}

