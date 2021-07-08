import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';
  constructor() {
    this.changeTitle('My First Angular App')
  }

  ngOnInit() {
    this.title = 'Angular CLI Rules!';
  }

  changeTitle(newTitle) {
    console.log(newTitle);
    this.title = newTitle;
  }

}
