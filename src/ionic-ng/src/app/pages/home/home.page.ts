import { Component } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { BasePageComponent } from 'src/app/components/page/base';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage extends BasePageComponent {

  constructor(modalController: ModalController) {
    super(modalController);
  }
}
