import { Component, Input, OnInit } from '@angular/core';
import { debounce } from 'lodash';
import { SeriesService } from '../shared/services/series.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent {
  value: string="";
  @Input() series: any = [];
  constructor(private service : SeriesService) { }

  onChange (e:any){
  
    this.seriesByName(e)
   }
  
  
   debouncedOnChange =debounce(this.onChange, 250, { 'maxWait': 1000 });
  
   seriesByName(title:string){
   
    this.service.getSeries(title).subscribe(resp => {
     this.series = resp;
  })

}
}
