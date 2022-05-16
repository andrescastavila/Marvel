import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Series } from '../models/series/series';
import { map, } from 'rxjs/operators';
import { GlobalConstants } from '../models/common/global-constants';
import { DataSource } from './datasource.service';


@Injectable({
  providedIn: 'root'
})
export class SeriesService  extends DataSource{
  seriesId=15435

  constructor(public http: HttpClient) {
    super();
  }

  url=`${GlobalConstants.apiUrl}series?${this.getUrlParams()}`;

  public getSeries():Observable<Series[]>{
    return this.http.get(this.url).pipe(
      map((res:any)=>{
        console.log(res.data.results);
        return res.data.results;
      })
    )
  }


  public getSeriesById(seriesId : number): Observable<Series[]>{
     this.url=`${GlobalConstants.apiUrl}series/${seriesId}?${this.getUrlParams()}`;
    return this.http.get(this.url).pipe(
      map((res:any)=>{
        console.log(res.data.results)
        return res.data.results;
      })
    )
  }

}
