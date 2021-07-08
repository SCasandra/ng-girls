import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
 @Output() submit: EventEmitter<string> = new EventEmitter<string>();
  title = 'Hello World';
  constructor() {
  }

  ngOnInit() {
    this.title = 'Angular CLI Rules!';
  }

  submitValue(newTitle: string) {
    this.title = newTitle;
    this.submit.emit(newTitle);
  }

}
