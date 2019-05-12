import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { RestService } from '../../rest.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  formdata: FormGroup;
  submitted = false;
  post;
  result = '';
  status = 'Not submitted';
  constructor(private rest: RestService, private formBuilder: FormBuilder) { }

  ngOnInit() {
  	this.formdata = this.formBuilder.group({
  		'title': ['', [Validators.required, Validators.minLength(2),  Validators.maxLength(24)]],
  		'body': ['', [Validators.required, Validators.maxLength(50)]]
  	});
  }

  // convenience getter for easy access to form fields
  get f(){ return this.formdata.controls; }

  onClickSubmit(data){
  	console.log(data);
  	this.submitted = true;

  	// return if the form is invalid
  	if(this.formdata.invalid){
  		return;
  	}

  	this.post = {
  		'title': data.title,
  		'body': data.body
  	}

  	this.rest.insert(this.post).subscribe( (res) => { 
		  this.result = JSON.stringify(res);
		  this.status = 'Success.';
	  }, err => {
		  this.status = 'Failure.';
	  });
  }
}
