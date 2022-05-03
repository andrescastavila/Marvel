import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , of, from} from 'rxjs';
import * as CryptoJS from 'crypto-js';
import { Character } from '../models/characters/Character';
import { map, } from 'rxjs/operators';
import { GlobalConstants } from '../models/common/global-constants';



@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(public http: HttpClient) { }

  public getCharacters():Observable<Character[]>{

    const publicApiKey="e84f95db87a67cb86fa5ebb74f999f9b";
    const secretApiKey="cdfa8e36af81f1e5faa8983a69758cd5562c39a4";
    const ts = Date.now();
    const url=`${GlobalConstants.apiUrl}characters?ts=${ts}&apikey=${publicApiKey}&hash=${CryptoJS.MD5(ts+secretApiKey+publicApiKey).toString()}`;

    return this.http.get(url).pipe(
      map((res:any)=>{
        console.log(res.data.results)
        return res.data.results;
      })
    )


  }

  


 // public getCharacters(): Observable<Character>{
  
    
 //   const ts = Date.now();
 //  const url=`https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${this.publicApiKey}&hash=${CryptoJS.MD5(ts+this.secretApiKey+this.publicApiKey).toString()}`;
 //   this.http.get()
   // const result  = from(this.http.get<Character>(url));
    // console.log(result);
     //return result;
      


     
    
//  }
}
