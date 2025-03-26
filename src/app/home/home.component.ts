import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HttpProviderService } from '../api/http-provider.service';
import { BehaviorSubject, catchError, Observable, of, tap , from,fromEvent, scan,map, shareReplay} from 'rxjs';
import { FormsModule } from '@angular/forms'
import { NgFor, NgIf, NgClass,CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { addListsType } from '../Types/toDo'
import dayjs from 'dayjs'

@Component({
  selector: 'app-home',
  imports: [NgFor,NgIf,CommonModule,RouterModule, NgClass,FormsModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {
[x: string]: any;
  private readonly httpProvider = inject(HttpProviderService);
  //BehaviorSubject：行為主體
  /**
   * Subject 產生的物件在訂閱時若沒有事件發生，會一直收不到資料，如果希望在一開始訂閱時會先收到一個預設值，且有事件發生後才訂閱的行為也可以收到最近一次發生過的事件資料，則可以使用 BehaviorSubject：
   */
  todoLists = new BehaviorSubject<addListsType[]>([]);
  todoList$: Observable<any[]> = this.todoLists.asObservable();
  constructor(private httpClient: HttpClient) {
   //  console.log('建構函式constructor啟動了')
  }
 private readonly apiUrl = environment.apiUrl;
  ngOnInit(): void {
    this.getAllList();
  }
  newTask: string = '';
  errorMessage: string = ''
  blurEvent(event: any) {
    const regZero = /^$/g;
    // 正向先行断言
    const regEx2 = /^(?=\s*$)/g;
   // 負向先行断言
    const regEx3 = /^(?!.*\S)/g;
    if (regZero.test(event.target.value) || regEx2.test(event.target.value) || regEx3.test(event.target.value)) {
      this.errorItemMessage= '不能為空！'
    } else if (event.target.value.length<3) {
       this.errorItemMessage='不能小於3！'
    }
    else {
      this.errorItemMessage=''
    }
}
  addItem(newTask: string) {
      this.httpProvider.addList(newTask).subscribe({
        next: () => {
          alert('add' +newTask);
          this.getAllList()
        }
      })
  }

  //獲取數據
 async getAllList() {
   this.httpProvider.getAllLists().pipe(
     tap(lists => {
       let arrLists: addListsType[] = [];
       lists.map(function(item: addListsType)  {
          let query: addListsType = {
            _id: item._id,
            title: item.title,
            Editing: false, // 編輯
            Status: false, //選取狀態
            CanEdit: true, //可以編輯
            buildDate: dayjs(item.buildDate).format('YYYY-MM-DD HH:mm'),
            updataDate: dayjs(item.updataDate).format('YYYY-MM-DD HH:mm'),
          };
          arrLists.push(query);
         arrLists.sort((a, b) => {
              return dayjs(b.buildDate).valueOf() -   dayjs(a.buildDate).valueOf()
          })
       });
       this.todoLists.next(arrLists);
      // console.log('this.todoLists', this.todoLists)
     }),
     catchError((error: any) => {
       console.error("獲取錯誤:", error);
       return of([]);
     })
   ).subscribe();

 }

  itemId: string = '';
  isActive: boolean = false;
  openEditItem(item:addListsType) {
     this.itemId = item._id;
  }
  //https://stackblitz.com/edit/github-umtlsr?file=src%2Fapp%2Ftodos%2Ffeature%2Ftodos-list%2Ftodos-list.component.ts&source=post_page-----2b4093f485a0---------------------------------------
  errorItemMessage: string = '';
  editItem(item: addListsType) {
    this.httpProvider.updateTodo(item).subscribe({
        next: () => {
          console.log('item', item)
         alert('修改' + item.title)
         this.itemId = '';
        },

       error: (err) => {
         console.log('err',err)
      },
    });
  }
  openDeleteAlert(_id:string) {
    this.deleteItem(_id)
  }
  deleteItem(_id:string) {
    this.httpProvider.deleteTodoById(_id).subscribe({
      next: () => {
        console.log('_id', _id)
        this.getAllList()
      }
    })
  }
}
