import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';
import { environment } from '../../environments/environment';
import dayjs from 'dayjs'
@Injectable({ providedIn: 'root' })
export class HttpProviderService {
  private readonly apiUrl = environment.apiUrl;
  private readonly webApiService = inject(WebApiService);

  getAllLists(): Observable<any> {
    console.log( this.webApiService)
    return this.webApiService.get(`${this.apiUrl}/api/toDoLists`);
  }
  // 編輯
  deleteTodoById(_id: string): Observable<any> {
    return this.webApiService.delete(`${this.apiUrl}/api/toDo/${encodeURIComponent(_id)}`);
  }

  getTodoById(id: string): Observable<any> {
    return this.webApiService.get(`${this.apiUrl}/api/toDo/${encodeURIComponent(id)}`);
  }
  // 新增
  addList(newTask: string): Observable<any> {
    let query:any = {
      title: newTask,
      buildDate: Date.now(),
      updataDate: Date.now(),
    }
    return this.webApiService.post(`${this.apiUrl}/api/toDo`,query);
  }

  // 編輯
  updateTodo(item: any): Observable<any> {
      console.log('updateTodo', item)
    let query:any = {
      title: item.title,
      buildDate: dayjs(item.buildDate).valueOf(),//改為時間搓
      updataDate: Date.now(),
    }
    return this.webApiService.put(`${this.apiUrl}/api/toDo/${encodeURIComponent(item._id)}`, query);
  }
}
