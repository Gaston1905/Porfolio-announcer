import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, HostListener, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
  export class HeroComponent implements OnInit, AfterViewInit {
    @ViewChild('videoElement') videoElement!: ElementRef;
    showVideo: boolean = false;
    video: any;
    isPaused: boolean = false;
    isDimmed: boolean = false;
    isDimming: boolean = false;
    isPlay: boolean = false;
    isClickedPlay: boolean = false;

    scroll(el: HTMLElement) {
      el.scrollIntoView();
    }

    constructor(private translate: TranslateService,
      private renderer: Renderer2) {
      translate.setDefaultLang('es');
      this.video = { src: '../../../assets/video/video.mp4' };
    }

    ngOnInit(): void {

      this.renderer.listen('window', 'scroll', () => {
        this.handleScroll();
      });
    }

    handleScroll() {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      // Aquí puedes definir la lógica para determinar cuándo se ha realizado un desplazamiento hacia abajo
      if (scrollPosition > 0) {
        this.onVideoPause();
      }
    }

    ngAfterViewInit() {
      setTimeout(() => {
        this.video = this.videoElement.nativeElement;
      }, 1000);
    }

    play() {
      this.isDimmed = true;
      this.isPlay = true;
      this.isPaused = false;
      this.isDimming = false; // Asegúrate de desactivar el dimming cuando se presiona play
      this.video.play();
    }

    onVideoPlay() {
      this.isClickedPlay = true;
      this.isPlay = true;
      this.isPaused = false;
      this.isDimming = false; // Asegúrate de desactivar el dimming cuando se presiona play
      this.video.play();
    }

    onVideoPause() {
      this.isPaused = true;
      this.isPlay = false;
      this.isDimming = !this.isDimming; // Invierte el valor de isDimming cuando se pausa el video
      this.isClickedPlay = false; // Establece isClickedPlay en false cuando se pausa el video
      console.log('El video se ha pausado');
    }


}
