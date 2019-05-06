import { Component, OnInit } from '@angular/core';
import { RestService } from '../../rest.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../../model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  response: any;
  public dataSource: User[];
  public columnsToDisplay: any[];

  constructor(private rest: RestService) {

  }

  ngOnInit() {
    this.rest.getUsersList().subscribe(result=>{
      this.dataSource = result;
      console.log(this.dataSource);
    });

    this.columnsToDisplay = ['Id','Name','Email','Phone'];
  }

}
