import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ModalController } from '@ionic/angular';

import { BasePageComponent } from 'src/app/components/page/base';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage extends BasePageComponent {

  constructor(
    modalController: ModalController,
    private titleService: Title
  ) {
    super(modalController);
  }

  ngOnInit() {
    this.titleService.setTitle('People');
  }
}
