import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { ModalController } from '@ionic/angular';

import { BasePageComponent } from 'src/app/components/page/base';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage extends BasePageComponent implements OnInit {
  constructor(
    modalController: ModalController,
    private metaService: Meta,
    private titleService: Title
  ) {
    super(modalController);
  }

  ngOnInit() {
    this.titleService.setTitle('People');

    this.metaService.updateTag(
      {
        name: 'description',
        content:
          "People are an organization's best resources, supported by technology and the processes they participate in",
      },
      'name=description'
    );

    this.metaService.updateTag(
      {
        name: 'keywords',
        content: 'organization,people',
      },
      'name=keywords'
    );
  }
}
