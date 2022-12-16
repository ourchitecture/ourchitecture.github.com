import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { repeat } from 'rxjs';

export interface TimerOptions {
  durationInMs: number;
  repeat: boolean;
}

export interface TimerHandle {
  options: TimerOptions;
  id: number;
}

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  async start(
    options: TimerOptions,
    action: Function,
    ...timerArgv: any[]
  ): Promise<TimerHandle> {
    if (!repeat) {
      throw new Error(
        'Not Implemented: Non-repeating timer has not been implemented yet.'
      );
    }

    return new Promise((resolve, reject) => {
      const handleId = this.getWindow().setInterval(
        function () {
          const handle: TimerHandle = {
            options: options,
            id: handleId,
          };

          try {
            action();
            resolve(handle);
          } catch (e) {
            reject(e);
          }
        },
        options.durationInMs,
        timerArgv
      );
    });
  }

  stop(handle: TimerHandle) {
    if (!handle.options.repeat) {
      throw new Error(
        'Not Implemented: Non-repeating timer has not been implemented yet.'
      );
    }

    this.getWindow().clearInterval(handle.id);
  }

  private getWindow(): Window {
    return this.document.defaultView;
  }
}
