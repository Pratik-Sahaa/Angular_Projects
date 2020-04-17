import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersListComponent } from './users-list/users-list.component';
import { HomepageComponent } from './homepage/homepage.component'


const appRoutes: Routes = [
  { path: '', 
  component: HomepageComponent },
  // {path : 'home', component: HomepageComponent},
  { path: 'active',
   component: UserDetailsComponent },
  { path: 'deleted',
   component: UsersListComponent },
  { path: 'manage',
  component: UserComponent
   }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes) ] ,
  exports: [RouterModule]
})
export class AppRoutingModule { }
