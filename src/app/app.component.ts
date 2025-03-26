import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
import { NavbarComponent } from './components/navbar/navbar.component';
import { navListType } from "./Types/nav"
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'vite_angular19_todo_project';

  navLists: navListType[] = [
    { title: 'Home', path: '/' },
    { title: 'User', path: 'user' },
    { title: 'Users', path: 'users' },
    {title:'Login',path:'login'}
  ]
  pageTitle: string = 'Home';
  isActive: boolean = false;
  actionList(title: string) {
    this.pageTitle = title;
  }
  ngOnInit(): void  {
    console.log(environment.production ? 'Production' : '開發中')
  }
}
