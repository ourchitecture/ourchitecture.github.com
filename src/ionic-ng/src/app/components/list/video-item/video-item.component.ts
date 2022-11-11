import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss'],
})
export class VideoItemComponent implements OnInit {

  @Input() title = "";
  @Input() url = "";
  @Input() thumbnailImageFilePath = "";

  @Output() visit = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}

  select() {
    this.visit.emit({
      title: this.title,
      url: this.url,
    });
  }
}
