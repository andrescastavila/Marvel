import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , of, from} from 'rxjs';
import { Character } from '../models/characters/Character';
import { map, } from 'rxjs/operators';
import { GlobalConstants } from '../models/common/global-constants';
import { DataSource } from './datasource.service';



@Injectable({
  providedIn: 'root'
})
export class CharactersService extends DataSource{
  characterId= 1009664;
  constructor(public http: HttpClient) {
    super();
  }

  public getCharacters():Observable<Character[]>{
    const url=`${GlobalConstants.apiUrl}characters?${this.getUrlParams()}`;

    return this.http.get(url).pipe(
      map((res:any)=>{
        console.log(res.data.results);
        return res.data.results;
      })
    )
  }

  public getCharacterById(characterId : number):Observable<Character[]>{

  const url=`${GlobalConstants.apiUrl}characters/${characterId}?${this.getUrlParams()}`;

  return this.http.get(url).pipe(
    map((res:any)=>{
      console.log(res.data.results)
      return res.data.results;
    })
  )
  }

}



