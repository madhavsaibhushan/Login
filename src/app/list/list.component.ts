import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
list:any[];
  constructor(private service:DataService) { }

  ngOnInit() {
    this.list=this.service.getList();
  }
  ngOnDestroy()
  {
    this.list=[]
    console.log("destroyed")
  }

}
