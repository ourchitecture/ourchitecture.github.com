import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeoplePageRoutingModule } from './people-routing.module';

import { HeaderComponent } from '../../components/page/header/header.component';
import { FooterComponent } from '../../components/page/footer/footer.component';

import { BookItemComponent } from '../../components/list/book-item/book-item.component';

import { PeoplePage } from './people.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeoplePageRoutingModule,
    HeaderComponent,
    FooterComponent,
    BookItemComponent,
  ],
  declarations: [PeoplePage],
})
export class PeoplePageModule {}
