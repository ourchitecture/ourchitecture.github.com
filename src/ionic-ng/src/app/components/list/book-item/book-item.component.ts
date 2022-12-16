import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  imports: [CommonModule, IonicModule],
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
})
export class BookItemComponent implements OnInit {
  @Input() title = '';
  @Input() url = '';
  @Input() thumbnailImageFileName = '';
  @Input() color = '';

  @Output() visit = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  select() {
    this.visit.emit(this.url);
  }
}
