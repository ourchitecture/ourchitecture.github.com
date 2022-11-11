import { Component, Input } from '@angular/core';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-play-video',
  templateUrl: './play-video.component.html',
  styleUrls: ['./play-video.component.scss'],
})
export class PlayVideoComponent {

  @Input() title: string;
  @Input() url: string;

  @Input() modalController: ModalController;

  close() {
    this.modalController.dismiss();
  }
}
