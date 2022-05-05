
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , of, from} from 'rxjs';
import * as CryptoJS from 'crypto-js';
import { map, } from 'rxjs/operators';
import { GlobalConstants } from '../models/common/global-constants';
import { Comic } from '../models/comics/comics';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {
  comicId = 82967;
  constructor(public http: HttpClient) { }

  public getComics():Observable<Comic[]>{

    const publicApiKey="e84f95db87a67cb86fa5ebb74f999f9b";
    const secretApiKey="cdfa8e36af81f1e5faa8983a69758cd5562c39a4";
    const ts = Date.now();
    const url=`${GlobalConstants.apiUrl}comics?ts=${ts}&apikey=${publicApiKey}&hash=${CryptoJS.MD5(ts+secretApiKey+publicApiKey).toString()}`;

    return this.http.get(url).pipe(
      map((res:any)=>{
        console.log(res.data.results);
        return res.data.results;
      })
    )
  }

    public getComicById(comicId : number):Observable<Comic[]>{
    const publicApiKey="e84f95db87a67cb86fa5ebb74f999f9b";
    const secretApiKey="cdfa8e36af81f1e5faa8983a69758cd5562c39a4";
    const ts = Date.now();
    const url=`${GlobalConstants.apiUrl}comics/${comicId}?ts=${ts}&apikey=${publicApiKey}&hash=${CryptoJS.MD5(ts+secretApiKey+publicApiKey).toString()}`;
  
    return this.http.get(url).pipe(
      map((res:any)=>{
        console.log(res.data.results)
        return res.data.results;
      })
    )
    }
}
