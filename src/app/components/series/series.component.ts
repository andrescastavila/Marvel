import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../../shared/services/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  series: any = [];

  constructor(private service: SeriesService) { }

  ngOnInit(): void {
      this.all();
    }

  all(){
    this.service.getSeries().subscribe(resp => {
      this.series = resp;
   })
 }

 SeriesId(){
  this.service.getSeriesById(this.service.seriesId)
   .subscribe(res=>{
  this.series=res;
    });
 }



}
