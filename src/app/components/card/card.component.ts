import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface ICard{
  title:string,
  modified:Date,
  thumbnailUrl:string,
  thumbnailExtension:string
}


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {

  constructor() { }

  @Input() elements: any = [];
  @Input() card : ICard[] =[this.elements];


}

