import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material';
import { MatDividerModule } from '@angular/material';

import { RestService } from '../rest.service';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [UsersComponent, PostsComponent, UserDetailComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatListModule,
    MatDividerModule
  ],
  exports: [
  	MatListModule,
  	MatDividerModule
  ],
  providers: [RestService]
})

export class ViewModule { }
