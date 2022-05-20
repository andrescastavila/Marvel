import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../../shared/services/comics.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
  comics: any = [];
  constructor(private serviceComics: ComicsService) { }

  ngOnInit(): void {
    this.allComics();
    this.comicById();
  }

  allComics(){
    this.serviceComics.getComics().subscribe(resp => {
      this.comics = resp;
   })
 }

comicById(){
   this.serviceComics.getComicById(this.serviceComics.comicId)
    .subscribe(res=>{
   this.comics=res;
     });
  }
}
