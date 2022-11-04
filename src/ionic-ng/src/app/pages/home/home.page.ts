import { DomSanitizer } from '@angular/platform-browser';

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  selectedVideo = null;
  leavingSite = null;

  constructor(private sanitizer: DomSanitizer) {
  }

  openVideo(title, url: string) {
    this.selectedVideo = {
      title,
      url: this.sanitizer.bypassSecurityTrustResourceUrl(url),
    };

    console.log('open video', this.selectedVideo);
  }

  closeVideo() {
    console.log('close video');
    this.selectedVideo = null;
  }

  openLeavingSite(url: string) {
    this.leavingSite = {
      url,
    };

    console.log('open leaving site', this.leavingSite);
  }

  closeLeavingSite() {
    console.log('close leaving site');
    this.leavingSite = null;
  }
}
