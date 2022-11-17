import { Component } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { Storage } from '@ionic/storage-angular';

import { LeavingSiteComponent } from '../../components/modals/leaving-site/leaving-site.component';
import { PlayVideoComponent } from '../../components/modals/play-video/play-video.component';

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
  leavingSiteIsVisible = false;
  leavingSiteUrl = null;
  logo = "assets/icon/favicon-light.svg";

  constructor(
    private modalController: ModalController,
    private storage: Storage) {
  }

  async ngOnInit() {
    await this.storage?.create();

    this.wasDarkModeToggleEnabled = await this.getIsDarkModeEnabledFromStorage();
    this.isDarkModeToggleEnabled = this.wasDarkModeToggleEnabled;

    this.setLogo(this.isDarkModeToggleEnabled);
  }

  private setLogo(isDarkMode: boolean) {
    this.logo = isDarkMode ? "assets/icon/favicon-dark.svg" : "assets/icon/favicon-light.svg";
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

    this.setLogo(this.isDarkModeToggleEnabled);
  }

  async openVideo(selectedVideo) {
    const playVideoModal = await this.modalController.create({
      component: PlayVideoComponent,
      componentProps: {
        title: selectedVideo.title,
        url: selectedVideo.url,
        modalController: this.modalController,
      },
      canDismiss: true,
      keyboardClose: true,
      showBackdrop: true,
    });

    await playVideoModal.present();
  }

  async openLeavingSite(url: string) {

    const leavingSiteModal = await this.modalController.create({
      component: LeavingSiteComponent,
      componentProps: {
        url: url,
        modalController: this.modalController,
      },
      canDismiss: true,
      keyboardClose: true,
      showBackdrop: true,
    });

    await leavingSiteModal.present();
  }
}
