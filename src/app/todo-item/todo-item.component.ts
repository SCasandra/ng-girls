import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ExecOptionsWithStringEncoding } from 'child_process';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  @Output() update: EventEmitter<any> = new EventEmitter<any>();
  edit = false;
  constructor() { }

  completeItem(): void {
    this.update.emit({
      item: this.item,
      changes: {completed: !this.item.completed}
    });
  }

  removeItem(): void
  {
    this.remove.emit(this.item);
  }

  editTitle(value: boolean) {
    this.edit = value;
    console.log(value);
  }

  saveTitle(title) {
    this.edit = false;
    this.update.emit({
      item: this.item,
      changes: {title}
    });
  }


}
