import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "users", component: UsersComponent  },
  { path: "user/:userId", component: UserComponent },
  { path: '**', component: PageNotFoundComponent },
];
