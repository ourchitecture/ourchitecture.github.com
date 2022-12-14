import { NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { IonicModule } from '@ionic/angular';

import { StubbedServiceTestModule } from '../services/stubbed.service.module.spec';
import { ListModule } from '../components/list/list.module';
import { PageModule } from '../components/page/page.module';

@NgModule({
  exports: [
    RouterTestingModule,
    IonicModule,
    StubbedServiceTestModule,
    ListModule,
    PageModule,
  ],
  imports: [
    RouterTestingModule,
    IonicModule.forRoot(),
    StubbedServiceTestModule,
    ListModule,
    PageModule,
  ],
})
export class PageTestModule {}
