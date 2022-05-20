
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , of, from} from 'rxjs';
import { map, } from 'rxjs/operators';
import { GlobalConstants } from '../models/common/global-constants';
import { Comic } from '../models/comics/comics';
import { DataSource } from './datasource.service';

@Injectable({
  providedIn: 'root'
})
export class ComicsService extends DataSource {
  comicId = 82967;
  constructor(public http: HttpClient) {
    super();
  }

  public getComics(title?:string):Observable<Comic[]>{
    let url=`${GlobalConstants.apiUrl}comics?`;
    if(!!title){
      url+=`title=${title}&`
    }
    url+=`${this.getUrlParams()}`;

    return this.http.get(url).pipe(
      map((res:any)=>{
        console.log(res.data.results);
        return res.data.results;
      })
    )
  }

    public getComicById(comicId : number):Observable<Comic[]>{
    
      const url=`${GlobalConstants.apiUrl}comics/${comicId}?${this.getUrlParams()}`;
  
    return this.http.get(url).pipe(
      map((res:any)=>{
        console.log(res.data.results)
        return res.data.results;
      })
    )
    }
}
