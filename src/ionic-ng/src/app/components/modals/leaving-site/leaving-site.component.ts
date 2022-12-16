import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Input, OnInit, Inject, OnDestroy } from '@angular/core';

import { IonicModule, ModalController } from '@ionic/angular';

const INITIAL_SECONDS_LEFT = 10;

@Component({
  standalone: true,
  selector: 'app-leaving-site',
  templateUrl: './leaving-site.component.html',
  styleUrls: ['./leaving-site.component.scss'],
  imports: [CommonModule, IonicModule],
})
export class LeavingSiteComponent implements OnInit, OnDestroy {
  @Input() url: string;

  @Input() modalController: ModalController;

  secondsLeft: number = INITIAL_SECONDS_LEFT;

  private redirectTimer: NodeJS.Timer;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.redirectTimer = setInterval(() => {
      if (this.secondsLeft > 0) {
        this.secondsLeft--;
        return;
      }

      if (this.secondsLeft <= 0) {
        this.resetCountdown();
        this.document.location.href = this.url;
        return;
      }
    }, 1000);
  }

  ngOnDestroy() {
    this.resetCountdown();
  }

  cancel() {
    this.resetCountdown();
    this.modalController.dismiss();
  }

  resetCountdown() {
    try {
      clearInterval(this.redirectTimer);
    } catch (e) {}
    this.secondsLeft = INITIAL_SECONDS_LEFT;
  }
}
