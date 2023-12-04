
import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() placeholder?: string = '';
  @Output() onHandleSearch = new EventEmitter<string>();

  handleSearch(event: any) {
    this.onHandleSearch.emit(event.target.value);
  };
};