import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material';
@NgModule({
  declarations: [UsersComponent, PostsComponent, UserDetailComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  exports: [MatTableModule]
})
export class ViewModule { }
