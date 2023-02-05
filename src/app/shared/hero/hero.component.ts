import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  @ViewChild('videoElement') videoElement!: ElementRef;
  showVideo: boolean = false;
  video: any;

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('es');
    this.video = { src: '../../../assets/video/video.mp4' };
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.video = this.videoElement.nativeElement;
  }

  play() {
    this.showVideo = true;
    this.video.play();
  }
}
