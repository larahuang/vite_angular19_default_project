import { Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, tap , from,fromEvent, scan,map, shareReplay} from 'rxjs';
import { addListsType } from '../../Types/toDo'
import { NgFor, NgIf, NgClass, CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  imports: [NgFor,NgIf,NgClass,FormsModule,CommonModule ],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent implements OnInit {
  @Input() sendTodoList$?: Observable<addListsType[]> ;
  @Input() sendItemId?: string;
  @Input() sendErrorItemMessage?: string;
  @Input() sendEditItem?: Observable<any[]> ;
  @Output() newItem = new EventEmitter<any>();
  @Output() newId = new EventEmitter<string>();
  @Output() newEvent = new EventEmitter<any>();
  @Output() newUpdateItem = new EventEmitter<any>();
  openEditItem(item:any) {
    this.newItem.emit(item);
  }
  editItem(item: any) {
    this.newUpdateItem.emit(item);
  }
  openDeleteAlert(id:string) {
    this.newId.emit(id)
  }
  deleteItem(id:string) {
    this.newId.emit(id)
  }
  blurEvent(event:any) {
    this.newEvent.emit(event)
  }
  ngOnInit(): void {}
}
