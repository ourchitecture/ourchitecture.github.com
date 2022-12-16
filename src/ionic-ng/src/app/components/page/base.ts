import { ModalController } from '@ionic/angular';

import { LeavingSiteComponent } from '../../components/modals/leaving-site/leaving-site.component';
import { PlayVideoComponent } from '../../components/modals/play-video/play-video.component';

export class BasePageComponent {
  constructor(public modalController: ModalController) {}

  public async openVideo(selectedVideo) {
    const playVideoModal = await this.modalController.create({
      component: PlayVideoComponent,
      componentProps: {
        title: selectedVideo.title,
        url: selectedVideo.url,
        modalController: this.modalController,
      },
      canDismiss: true,
      keyboardClose: true,
      showBackdrop: true,
    });

    await playVideoModal.present();
  }

  public async openLeavingSite(url: string) {
    const leavingSiteModal = await this.modalController.create({
      component: LeavingSiteComponent,
      componentProps: {
        url: url,
        modalController: this.modalController,
      },
      canDismiss: true,
      keyboardClose: true,
      showBackdrop: true,
    });

    await leavingSiteModal.present();
  }
}
