import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-series',
  templateUrl: './card-series.component.html',
  styleUrls: ['./card-series.component.css']
})
export class CardSeriesComponent implements OnInit {

  constructor() { }
  @Input() series: any = [];
  ngOnInit(): void {
  }

}
