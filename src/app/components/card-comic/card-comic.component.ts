import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-comic',
  templateUrl: './card-comic.component.html',
  styleUrls: ['./card-comic.component.css']
})
export class CardComicComponent implements OnInit {
 
  constructor() { }
  @Input() comics: any = [];
  ngOnInit(): void {
  }

}
