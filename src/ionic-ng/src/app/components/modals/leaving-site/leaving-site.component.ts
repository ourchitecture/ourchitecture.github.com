import { Component, Input } from '@angular/core';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-leaving-site',
  templateUrl: './leaving-site.component.html',
  styleUrls: ['./leaving-site.component.scss'],
})
export class LeavingSiteComponent {

  @Input() url: string;

  @Input() modalController: ModalController;

  cancel() {
    this.modalController.dismiss();
  }
}
