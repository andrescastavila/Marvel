import { Component, Input, OnInit } from '@angular/core';
import { debounce } from 'lodash';
import { ComicsService } from '../../shared/services/comics.service';

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.css']
})
export class ComicListComponent  {

  constructor(private service : ComicsService) { }
  value: string="";
 @Input() comics: any = [];
//  @Input() cardData: any=[this.characters];
 onChange (e:any){

  this.comicByName(e)
 }


 debouncedOnChange =debounce(this.onChange, 250, { 'maxWait': 1000 });

 comicByName(title:string){

  this.service.getComics(title).subscribe(resp => {
   this.comics = resp;
})

}



}
