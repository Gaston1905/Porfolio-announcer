import { state, style, trigger } from '@angular/animations';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeOut', [
      state(
        'void',
        style({
          opacity: 0,
        })
      ),
    ]),
  ],
})
export class AppComponent implements OnInit {
  @ViewChild('up', { static: false }) up: ElementRef | undefined;
  public showLoading: boolean;
  public fadeState = 'out';

  constructor() {
    this.showLoading = false;
  }

  ngOnInit(): void {
    this.showLoading = true;
    this.checkRenderComplete();
  }
  title = 'FranciscoEscobar';

  scrollTemplate(el: HTMLElement) {
    el.scrollIntoView();
  }

  checkRenderComplete() {
    // Verifica si la página ha sido renderizada completamente
    // Puedes utilizar la función window.requestAnimationFrame para verificar el estado de renderización
    window.requestAnimationFrame(() => {
      if (document.readyState === 'complete') {
        // La página se ha renderizado completamente
        // ocultar el loading o realizar otras acciones necesarias
        setTimeout(() => {
          this.showLoading = false;
        }, 5000);
      } else {
        // La página aún no se ha renderizado completamente
        // Vuelve a llamar a la función checkRenderComplete en el siguiente ciclo de animación
        this.checkRenderComplete();
      }
    });
  }

  scroll(el: ElementRef) {
    el.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
