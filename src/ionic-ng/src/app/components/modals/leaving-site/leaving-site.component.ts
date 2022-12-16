import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Input, OnInit, Inject, OnDestroy } from '@angular/core';

import { IonicModule, ModalController } from '@ionic/angular';

import {
  TimerService,
  TimerOptions,
  TimerHandle,
} from '../../../services/timer.service';

export const INITIAL_SECONDS_LEFT = 10;

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

  private redirectTimerHandle: TimerHandle;

  constructor(
    private timerService: TimerService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  async ngOnInit(): Promise<void> {
    const timerOptions: TimerOptions = {
      durationInMs: INITIAL_SECONDS_LEFT,
      repeat: true,
    };

    this.redirectTimerHandle = await this.timerService.start(
      timerOptions,
      () => {
        if (this.secondsLeft > 0) {
          this.secondsLeft--;
          return;
        }

        if (this.secondsLeft <= 0) {
          this.resetCountdown();
          this.document.location.href = this.url;
          return;
        }
      }
    );
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
      this.timerService.stop(this.redirectTimerHandle);
    } catch (e) {}
    this.secondsLeft = INITIAL_SECONDS_LEFT;
  }

  private getWindow(): Window {
    return this.document.defaultView;
  }
}
