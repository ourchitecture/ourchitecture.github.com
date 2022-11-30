import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { ModalController } from '@ionic/angular';

import { BasePageComponent } from 'src/app/components/page/base';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage extends BasePageComponent {

  constructor(
    modalController: ModalController,
    private metaService: Meta,
    private titleService: Title) {
    super(modalController);
  }

  ngOnInit() {
    this.titleService.setTitle('Ourchitecture: Business and Digital Technology alignment');

    this.metaService.updateTag(
      {
        name: 'description',
        content: 'Alignment between business and digital technology and transformation',
      },
      'name=description'
    );

    this.metaService.updateTag(
      {
        name: 'keywords',
        content: 'business,technology,alignment',
      },
      'name=keywords'
    );
  }
}
