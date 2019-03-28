import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DataInterface } from 'src/data.interface';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
tempdashboard:DataInterface[];
dashboard:DataInterface[];

  constructor(private service:DataService,private activated:ActivatedRoute) {
   
   }

  ngOnInit() {
    this.activated.data.subscribe((data:Data)=>
    {
      this.tempdashboard=data['resolver']
  this.dashboard=this.tempdashboard.slice(0,5)
    })
    // this.dashboard=this.service.getList();
    // this.dashboard=this.dashboard.splice(1,5) 




  }
ngOnDestroy()
{
  this.dashboard=[]
}
}
