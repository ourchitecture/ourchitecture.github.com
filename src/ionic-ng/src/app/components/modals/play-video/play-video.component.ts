import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { IonicModule, ModalController, AnimationController } from '@ionic/angular';

import { SafePipeModule } from '../../../pipes/safe.pipe.module';

@Component({
  standalone: true,
  selector: 'app-play-video',
  templateUrl: './play-video.component.html',
  styleUrls: ['./play-video.component.scss'],
  imports: [
    CommonModule,
    IonicModule,
    SafePipeModule,
  ],
})
export class PlayVideoComponent implements AfterViewInit {
  @Input() title: string;
  @Input() url: string;

  @Input() modalController: ModalController;

  @ViewChild('videoPlaceholder') videoPlaceholderRef: ElementRef;
  @ViewChild('videoFrame') videoFrameRef: ElementRef;

  videoWidth = "1px";
  videoHeight = "1px";
  isVideoReady = false;

  constructor(private animationController: AnimationController) {
  }

  ngAfterViewInit(): void {
    this.videoFrameRef.nativeElement.onload = () => {

      this.videoWidth = "100%";
      this.videoHeight = "80%";

      const animationDuration = 1000;

      this.animationController.create()
        .addElement(this.videoPlaceholderRef.nativeElement)
        .fromTo('opacity', '1', '0')
        .duration(animationDuration)
        .play();

      this.animationController.create()
        .addElement(this.videoFrameRef.nativeElement)
        .keyframes([
          { offset: 0, opacity: '0' },
          { offset: 1, opacity: '1' },
        ])
        .duration(animationDuration * 0.9)
        .play()
        .finally(() => {
          this.isVideoReady = true;
        });
    };
  }

  close() {
    this.modalController.dismiss();
  }
}
