import { state, style, trigger } from '@angular/animations';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

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
  // Variable para referenciar información de modal
  modalRef: MDBModalRef | null = null;
  @ViewChild('up', { static: false }) up: ElementRef | undefined;
  public showLoading: boolean;
  public fadeState = 'out';
  public isLogged: boolean = false;

  constructor(
    private modalService: MDBModalService,
    private authService: AuthService,
    private cookies: CookieService
  ) {
    this.showLoading = false;
  }

  ngOnInit(): void {
    this.showLoading = true;
    this.checkRenderComplete();

    const token = this.authService.getToken();

    if (token) {
      this.isLogged = true;
    }
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

  // llamada al modal de login
  public login() {
    this.modalRef = this.modalService.show(LoginComponent);
  }

  // llamada al logout
  public logout() {
    let token = this.authService.getToken();
    token = JSON.stringify(token);
    this.authService.logout(token).subscribe({
      next: (res: any) => {
        if ((res.message = 'Successfully')) {
          this.cookies.delete('token_announcer');
          window.location.reload();
        }
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      },
    });
  }
}
