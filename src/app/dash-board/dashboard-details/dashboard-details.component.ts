import { Component, OnInit } from '@angular/core';
import { DataInterface } from 'src/data.interface';
import { ActivatedRoute, Params,Data } from '@angular/router';

@Component({
  selector: 'app-dashboard-details',
  templateUrl: './dashboard-details.component.html',
  styleUrls: ['./dashboard-details.component.css']
})
export class DashboardDetailsComponent implements OnInit {
id;
name;

details:{id:number,name:string}
  constructor(private activated:ActivatedRoute) { }

  ngOnInit() {
  
    
    this.activated.queryParams.subscribe(params=>
      {
        console.log("paramsid"+(params.id))
this.id=+params.id;
this.name=params.name
      })

  }

}
