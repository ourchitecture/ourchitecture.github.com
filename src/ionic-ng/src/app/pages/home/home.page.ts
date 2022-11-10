import { DomSanitizer } from '@angular/platform-browser';

import { Component } from '@angular/core';

import { Storage } from '@ionic/storage-angular';

const STORAGE_KEYS_APP_DARK_MODE = 'app_dark-mode';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  wasDarkModeToggleEnabled = true;
  isDarkModeToggleEnabled = true;
  selectedVideo = null;
  leavingSite = null;

  constructor(
    private sanitizer: DomSanitizer,
    private storage: Storage) {
  }

  async ngOnInit() {
    await this.storage?.create();

    this.wasDarkModeToggleEnabled = await this.getIsDarkModeEnabledFromStorage();
    this.isDarkModeToggleEnabled = this.wasDarkModeToggleEnabled;
  }

  async getIsDarkModeEnabledFromStorage() {
    const storageIsDarkModeEnabled = await this.storage?.get(STORAGE_KEYS_APP_DARK_MODE);

    let isDarkModeEnabled = true;

    // if a preference has never been set, read the system preference
    if (storageIsDarkModeEnabled == null) {
      const isDarkModePreferred = window.matchMedia('(prefers-color-scheme: dark)');

      isDarkModeEnabled = isDarkModePreferred ? true : false;
    } else {
      isDarkModeEnabled = storageIsDarkModeEnabled ? true : false;
    }

    document.body.classList.toggle('dark', isDarkModeEnabled);

    return isDarkModeEnabled;
  }

  // setAppDarkMode() {
  //   document.body.classList.toggle('dark', this.isDarkModeEnabled);
  // }

  async toggleDarkMode() {
    if (!this.storage) {
      return;
    }

    // out of sync detection
    if (this.isDarkModeToggleEnabled != this.wasDarkModeToggleEnabled) {
      return;
    }

    // remember the toggled setting
    this.wasDarkModeToggleEnabled = !this.isDarkModeToggleEnabled;

    // store the toggled setting
    await this.storage.set(STORAGE_KEYS_APP_DARK_MODE, this.wasDarkModeToggleEnabled);

    console.log('Toggling dark mode setting...');

    document.body.classList.toggle('dark', this.wasDarkModeToggleEnabled);

    // update the toggled setting
    this.isDarkModeToggleEnabled = this.wasDarkModeToggleEnabled;
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
