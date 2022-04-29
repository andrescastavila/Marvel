import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as CryptoJS from 'crypto-js';
import { Character } from '../models/characters/Character';



@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private publicApiKey="e84f95db87a67cb86fa5ebb74f999f9b";
  private secretApiKey="cdfa8e36af81f1e5faa8983a69758cd5562c39a4";
 
  constructor(public http: HttpClient) { }

  public getCharacters(): Observable<Character>{
  
    const ts = Date.now();
    const url=`https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${this.publicApiKey}&hash=${CryptoJS.MD5(ts+this.secretApiKey+this.publicApiKey)}`;
    return this.http.get(url);
  }
}
