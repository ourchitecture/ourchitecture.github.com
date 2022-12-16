import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RedirectService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  visit(url: string) {
    this.document.location.href = url;
  }
}
