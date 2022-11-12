import { Component, Input } from '@angular/core';

import {
  IonicModule,
  ModalController,
} from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-leaving-site',
  templateUrl: './leaving-site.component.html',
  styleUrls: ['./leaving-site.component.scss'],
  imports: [
    IonicModule,
  ],
})
export class LeavingSiteComponent {

  @Input() url: string;

  @Input() modalController: ModalController;

  cancel() {
    this.modalController.dismiss();
  }
}
