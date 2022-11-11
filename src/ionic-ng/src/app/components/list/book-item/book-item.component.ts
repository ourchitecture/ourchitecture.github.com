import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
})
export class BookItemComponent implements OnInit {

  @Input() title = "";
  @Input() url = "";
  @Input() thumbnailImageFileName = "";

  @Output() visit = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  select() {
    this.visit.emit(this.url);
  }
}
