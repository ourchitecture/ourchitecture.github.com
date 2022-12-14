import { NgModule } from '@angular/core';

import { BookItemComponent } from './book-item/book-item.component';
import { UrlItemComponent } from './url-item/url-item.component';
import { VideoItemComponent } from './video-item/video-item.component';

@NgModule({
  exports: [BookItemComponent, UrlItemComponent, VideoItemComponent],
  imports: [BookItemComponent, UrlItemComponent, VideoItemComponent],
})
export class ListModule {}
