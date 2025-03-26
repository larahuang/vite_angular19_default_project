import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, firstValueFrom, map, Observable, of, tap ,catchError } from "rxjs";
import { environment } from '../../environments/environment';
import { NgFor, NgIf, NgClass, CommonModule } from '@angular/common';
import { addListsType } from '../Types/toDo'
@Component({
  selector: 'app-users',
  imports: [NgFor,CommonModule,RouterModule,],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent {
  private apiUrl = environment.apiUrl;
  todoLists = new BehaviorSubject<addListsType[]>([]);
  todoList$: Observable<any[]> = this.todoLists.asObservable();
  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {
     this.getAllList();
  }
  data$: Observable<any> | undefined;
  data: any;

  getAllList() {
    const api = `${this.apiUrl}/api/toDoLists`;
     console.log('this.data',this.data)
   this.data$ = this.httpClient.get(api).pipe(
     tap(data => {
       this.data = data;

    })
   );
     console.log('this.data$',this.data$)
  }
}

//https://medium.com/@ittrainerbengaluru/angular-crud-operations-2587839a5d9e

//https://www.infragistics.com/products/ignite-ui-angular/angular/components/general/how-to/how-to-perform-crud
