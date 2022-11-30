import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

import * as lunr from 'lunr';

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

  searchDocuments: any[] = [];
  searchIndex: any = {};

  searchQuery = '';
  isSearchResultsVisible = false;
  isSearchResultsLoading = false;
  searchResults: any[] = [];

  constructor(private storage: Storage) { }

  async ngOnInit() {
    await this.storage?.create();

    this.wasDarkModeToggleEnabled = await this.getIsDarkModeEnabledFromStorage();
    this.isDarkModeToggleEnabled = this.wasDarkModeToggleEnabled;

    this.setLogo(this.isDarkModeToggleEnabled);

    const searchIndexDataResponse = await fetch('/api/data/search-index.json');

    if (searchIndexDataResponse.ok) {
      const searchIndexData = await searchIndexDataResponse.json();

      // console.log('search index fetched', searchIndexData);

      this.searchDocuments = searchIndexData.documents;
      this.searchIndex = lunr.Index.load(searchIndexData.index);
    } else {
      const responseText = await searchIndexDataResponse.text();

      // TODO: log errors
      console.error('Failed to retrieve search index', searchIndexDataResponse.status, searchIndexDataResponse.statusText, responseText);
    }
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

  public searchKeyUp(event: any) {
    switch (event.keyCode) {
      // return / enter
      case 13:
        this.submitSearch();
        break;
    }
  }

  public async loadSearchResults() {
    try {
      console.debug('Searching for', this.searchQuery);

      const rawSearchResults = this.searchIndex.search(this.searchQuery);

      this.searchResults = rawSearchResults
        .slice(0, 15)
        .map((result) => {
          const matchingDocument = this.searchDocuments.find((d) => d.id === result.ref);

          if (!matchingDocument) {
            // TODO: log errors
            console.error('Failed to find a matching document for the search index result', result.ref);
          }

          return {
            id: result.ref,
            url: matchingDocument?.url,
            title: matchingDocument?.title,
          };
        });

      console.debug('search results', this.searchResults);
    } catch(e) {
      console.error('Unexpected search error', e);
    }
    finally {
      this.isSearchResultsLoading = false;
    }
  }

  public async search(event: any) {
    this.searchQuery = event.target.value.trim();
  }

  public async submitSearch() {
    if (this.searchQuery.length > 0) {
      this.searchResults = [];
      this.isSearchResultsLoading = true;
      this.isSearchResultsVisible = true;
      await this.loadSearchResults();
    }
  }

  public dismissSearchResults() {
    this.searchResults = [];
    this.isSearchResultsLoading = false;
    this.isSearchResultsVisible = false;
  }

  public getSearchResultTracker(index: number, searchResult: any) {
    return searchResult.id;
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
