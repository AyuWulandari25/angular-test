import { Component, OnInit } from '@angular/core';
import { IData } from 'data';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-title-card',
  templateUrl: './title-card.component.html',
  styleUrls: ['./title-card.component.css'],
})
export class TitleCardComponent implements OnInit {
  datas: IData[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getData();
  }
  getData(): any {
    this.dataService.getData().subscribe((data: any) => {
      this.datas = data;
      console.log(data);
    });
  }
}
