import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { RestService } from '../../rest.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postTitle;
  postBody;
  formdata;
  constructor(private rest: RestService) { }

  ngOnInit() {
  	this.formdata = new FormGroup({
  		'title': new FormControl('Test title', Validators.compose([Validators.requiredTrue, Validators.minLength(2),  Validators.maxLength(24)])),
  		'body': new FormControl('Test body', Validators.compose([Validators.requiredTrue, Validators.maxLength(50)]))
  	});
  }

  onClickSubmit(data){
  	this.postTitle = data.Title;
  	this.postBody = data.Body;
  	var post = {
  		'title': this.postTitle,
  		'body': this.postBody
  	}

  	this.rest.insert(post).subscribe( (res) => 
  		{ 
  			console.log(res);
  		}, err => {
  			console.log("Error");
  		});
  }
}
