import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { ThemeService } from '../../../services/theme.service';
import { SearchService } from '../../../services/search.service';

@Component({
  standalone: true,
  imports: [CommonModule, IonicModule, HttpClientModule],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string;

  logo = 'assets/icons/favicon-light.svg';

  searchDocuments: any[] = [];
  searchIndex: any = {};

  searchQuery = '';
  isSearchResultsVisible = false;
  isSearchResultsLoading = false;
  searchResults: any[] = [];

  constructor(
    private themeService: ThemeService,
    private searchService: SearchService
  ) {}

  async ngOnInit() {
    try {
      await this.themeService.initialize();

      this.setLogo(this.themeService.getIsDarkModeEnabled());
    } catch (error) {
      // TODO: log errors
      console.error('Unexpected error initializing the ThemeService', error);
    }

    try {
      const searchIndexData = await this.searchService.getSearchIndexData();

      this.searchDocuments = searchIndexData.documents;
      this.searchIndex = searchIndexData.index;
    } catch (error) {
      // TODO: log errors
      console.error('Failed to retrieve search index', error);
    }
  }

  public async toggleDarkMode() {
    this.themeService.toggleDarkMode();

    this.setLogo(this.themeService.getIsDarkModeEnabled());
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

      this.searchResults = rawSearchResults.slice(0, 15).map((result) => {
        const matchingDocument = this.searchDocuments.find(
          (d) => d.id === result.ref
        );

        if (!matchingDocument) {
          // TODO: log errors
          console.error(
            'Failed to find a matching document for the search index result',
            result.ref
          );
        }

        return {
          id: result.ref,
          url: matchingDocument?.url,
          title: matchingDocument?.title,
        };
      });

      console.debug('search results', this.searchResults);
    } catch (e) {
      console.error('Unexpected search error', e);
    } finally {
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

  private setLogo(isDarkMode: boolean) {
    console.debug(
      'Updating site logo',
      this.themeService.getIsDarkModeEnabled()
    );

    this.logo = isDarkMode
      ? 'assets/icons/favicon-dark.svg'
      : 'assets/icons/favicon-light.svg';
  }
}
