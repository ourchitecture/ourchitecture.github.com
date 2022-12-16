import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  imports: [CommonModule, IonicModule],
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss'],
})
export class VideoItemComponent implements OnInit {
  @Input() title = '';
  @Input() url = '';
  @Input() thumbnailImageFilePath = '';
  @Input() color = '';

  @Output() visit = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  select() {
    this.visit.emit({
      title: this.title,
      url: this.url,
    });
  }
}
