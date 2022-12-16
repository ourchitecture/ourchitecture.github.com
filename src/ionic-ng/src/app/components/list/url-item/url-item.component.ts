import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  imports: [CommonModule, IonicModule],
  selector: 'app-url-item',
  templateUrl: './url-item.component.html',
  styleUrls: ['./url-item.component.scss'],
})
export class UrlItemComponent implements OnInit {
  @Input() title = '';
  @Input() url = '';
  @Input() color = '';

  @Output() visit = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  select() {
    this.visit.emit(this.url);
  }
}
