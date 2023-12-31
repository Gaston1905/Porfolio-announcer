import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
  Renderer2,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/auth/auth.service';

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
  // userData: User[] = userMock;
  isLogged: boolean = false;
  // Declaramos las variables de almacenamiento de datos de sesion de usuario
  sessionUserData: any;
  public userData: any[] = [];
  // Declarar las variables de datos de usuario
  public nameUser: string = '';
  public lastNameUser: string = '';
  public descriptionUser: string = '';

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  constructor(
    private translate: TranslateService,
    private renderer: Renderer2,
    private authService: AuthService
  ) {
    translate.setDefaultLang('es');
    this.video = { src: '../../../assets/video/video.mp4' };

    // Recuperamos los datos del usuario
    this.sessionUserData = sessionStorage.getItem('userData');
    const data = [JSON.parse(this.sessionUserData)]; // Convertir a array
    this.userData = [data[0]];
    // Asignamos los valores de datos de usuario
    this.nameUser = this.userData[0]?.name;
    this.lastNameUser = this.userData[0]?.last_name;
    this.descriptionUser = this.userData[0]?.user_description;
  }

  ngOnInit(): void {
    this.renderer.listen('window', 'scroll', () => {
      this.handleScroll();
    });

    const token = this.authService.getToken();

    if (token) {
      this.isLogged = true;
    }
  }

  handleScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
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
