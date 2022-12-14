import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent],
})
export class PageModule {}
