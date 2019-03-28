import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css']
})
export class ListDetailsComponent implements OnInit {
listId;
name;
  constructor(private route:ActivatedRoute,private service:DataService) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params:Params)=>
    {
      this.listId=+params.id;
      this.name=params.name;

    }
  )
  }
  update()
  {
    this.service.update(this.listId,this.name)
  
  }

}
