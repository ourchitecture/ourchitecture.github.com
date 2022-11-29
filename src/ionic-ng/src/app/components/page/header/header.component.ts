import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

const STORAGE_KEYS_APP_DARK_MODE = 'app_dark-mode';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
  ],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  private wasDarkModeToggleEnabled = true;
  private isDarkModeToggleEnabled = true;

  @Input() title: string;

  logo = "assets/icons/favicon-light.svg";

  constructor(private storage: Storage) { }

  async ngOnInit() {
    await this.storage?.create();

    this.wasDarkModeToggleEnabled = await this.getIsDarkModeEnabledFromStorage();
    this.isDarkModeToggleEnabled = this.wasDarkModeToggleEnabled;

    this.setLogo(this.isDarkModeToggleEnabled);
  }

  public async toggleDarkMode() {
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

  private async getIsDarkModeEnabledFromStorage() {
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

  private setLogo(isDarkMode: boolean) {
    this.logo = isDarkMode ? "assets/icons/favicon-dark.svg" : "assets/icons/favicon-light.svg";
  }
}
