import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  isPaused: boolean = false;
  isDimmed: boolean = false;
  isDimming: boolean = false;
  isPlay: boolean = false;
  isClickedPlay: boolean = false;

    // Variable para almacenar los observadores
    youtubeObservers: IntersectionObserver[] = [];

  constructor() { }

  ngOnInit(): void {
        // Llama a la función para iniciar los observadores de intersección en el evento 'DOMContentLoaded'
        this.initializeYouTubeObservers();
  }


  // Función para cargar el embebido de YouTube cuando sea visible
  loadYouTubeEmbed(embedElement: HTMLIFrameElement) {
    const videoSrc = embedElement.getAttribute('data-src');
    if (videoSrc) {
      embedElement.setAttribute('src', videoSrc);
    }
  }

  // Función de devolución de llamada para el observador de intersección
  intersectionCallback(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const embedElement = entry.target as HTMLIFrameElement;
        this.loadYouTubeEmbed(embedElement);
        observer.unobserve(embedElement);
      }
    });
  }

  // Función para iniciar los observadores de intersección en los elementos embebidos de YouTube
  initializeYouTubeObservers() {
    const embedElements = document.querySelectorAll('iframe[data-src]');
    embedElements.forEach((embedElement) => {
      const observer = new IntersectionObserver(this.intersectionCallback.bind(this), { threshold: 0.1 });
      console.log(observer)
      observer.observe(embedElement);
      console.log(embedElement)
      this.youtubeObservers.push(observer);
    });
  }

  loadBackground() {
    this.isDimmed = true;
    this.isPlay = true;
    this.isPaused = false;
    this.isDimming = false; // Asegúrate de desactivar el dimming cuando se presiona play
    console.log('me ejecuto')
  }

}
