import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { ModalController } from '@ionic/angular';

import { BasePageComponent } from 'src/app/components/page/base';

@Component({
  selector: 'app-process',
  templateUrl: './process.page.html',
  styleUrls: ['./process.page.scss'],
})
export class ProcessPage extends BasePageComponent implements OnInit {
  constructor(
    modalController: ModalController,
    private metaService: Meta,
    private titleService: Title
  ) {
    super(modalController);
  }

  ngOnInit() {
    this.titleService.setTitle('Process');

    this.metaService.updateTag(
      {
        name: 'description',
        content:
          'Organizational processes including lean and agile allow people to collaborate and use technology to deliver value',
      },
      'name=description'
    );

    this.metaService.updateTag(
      {
        name: 'keywords',
        content: 'organization,process',
      },
      'name=keywords'
    );
  }
}
