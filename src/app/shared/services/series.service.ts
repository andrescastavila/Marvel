import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Series } from '../models/series/series';
import * as CryptoJS from 'crypto-js';
import { map, } from 'rxjs/operators';
import { GlobalConstants } from '../models/common/global-constants';


@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  seriesId=15435

  constructor(public http: HttpClient) { }

  publicApiKey="e84f95db87a67cb86fa5ebb74f999f9b";
  secretApiKey="cdfa8e36af81f1e5faa8983a69758cd5562c39a4";
  ts = Date.now();
  url=`${GlobalConstants.apiUrl}series?ts=${this.ts}&apikey=${this.publicApiKey}&hash=${CryptoJS.MD5(this.ts+this.secretApiKey+this.publicApiKey).toString()}`;

  public getSeries():Observable<Series[]>{
    return this.http.get(this.url).pipe(
      map((res:any)=>{
        console.log(res.data.results);
        return res.data.results;
      })
    )
  }


  public getSeriesById(seriesId : number): Observable<Series[]>{
    this.url=`${GlobalConstants.apiUrl}series/${seriesId}?ts=${this.ts}&apikey=${this.publicApiKey}&hash=${CryptoJS.MD5(this.ts+this.secretApiKey+this.publicApiKey).toString()}`;
    return this.http.get(this.url).pipe(
      map((res:any)=>{
        console.log(res.data.results)
        return res.data.results;
      })
    )
  }

}
