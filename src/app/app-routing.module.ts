import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './view/users/users.component';
import { PostsComponent } from './view/posts/posts.component';
import {UserDetailComponent} from './view/user-detail/user-detail.component';

const routes: Routes = [
	{ path:'', redirectTo:'/users', pathMatch:'full'},
	{ path:'users', component:UsersComponent },
	{ path:'users/:id', component:UserDetailComponent},
	{ path: 'posts', component:PostsComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
