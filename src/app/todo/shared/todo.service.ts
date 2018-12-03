import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todolist: AngularFireList<any>;
  constructor(private firebasedb: AngularFireDatabase) { }

  getTodoList() {
    this.todolist = this.firebasedb.list('titles');
    return this.todolist;
  }

  addTitle(title: string) {
    this.todolist.push({
      title: title,
      isChecked: false
    })
  }
}
