import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-url-item',
  templateUrl: './url-item.component.html',
  styleUrls: ['./url-item.component.scss'],
})
export class UrlItemComponent implements OnInit {

  @Input() title = "";
  @Input() url = "";

  @Output() visit = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  select() {
    this.visit.emit(this.url);
  }
}
