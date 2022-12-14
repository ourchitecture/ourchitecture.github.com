import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import * as lunr from 'lunr';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(@Inject(HttpClient) private httpClient: HttpClient) {}

  public getSearchIndexData(): any {
    return new Promise((resolve, reject) => {
      const searchIndexUrl = '/api/data/search-index.json';
      let subscription: Subscription | undefined;

      subscription = this.httpClient.get(searchIndexUrl).subscribe({
        next: (searchIndexData: any) => {
          if (subscription) subscription.unsubscribe();

          // console.log('search index fetched', searchIndexData);
          const searchIndex = lunr.Index.load(searchIndexData.index);

          const result = {
            documents: searchIndexData.documents,
            index: searchIndex,
          };

          resolve(result);
        },
        error: (error: any) => {
          if (subscription) subscription.unsubscribe();

          reject(error);
        },
      });
    });
  }
}
