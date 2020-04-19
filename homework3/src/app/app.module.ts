import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActiveModule } from './active/active.module';
import { DeletedModule } from './deleted/deleted.module';
import { ManageModule } from './manage/manage.module';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersService } from './users.service';
import { HomepageComponent } from './homepage/homepage.component';
import { StatusPipe } from './status.pipe';
import { FullnamePipe } from './fullname.pipe'



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailsComponent,
    UsersListComponent,
    HomepageComponent,
    StatusPipe,
    FullnamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ActiveModule,
    DeletedModule,
    ManageModule,
    HttpClientModule,
    FormsModule
   
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
