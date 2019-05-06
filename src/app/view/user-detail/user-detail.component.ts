import { Component, OnInit } from '@angular/core';
import { RestService } from '../../rest.service';
import { User } from '../../model/user';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  
  response: any;
  public userDetail: User;
  constructor(private rest: RestService, private route:ActivatedRoute) { }

  ngOnInit() {
  	const id = this.route.snapshot.paramMap.get('id');
  	this.rest.getUser(id).subscribe(result => {
  		this.userDetail = result;
  		console.log(result);
  	});
  }

}
