import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-nav',
  templateUrl: './contact-nav.component.html',
  styleUrls: ['./contact-nav.component.scss'],
})
export class ContactNavComponent implements OnInit {
  // Declaramos las variables de almacenamiento de datos de usuario
  sessionUserData: any;
  public userData: any[] = [];

  // Declaramos las variables de almacenamiento de url
  public urlLinkedin: string = '';
  public urlInstagram: string = '';
  public urlFacebook: string = '';
  public urlYoutube: string = '';

  ngOnInit(): void {
    // Recuperamos los datos del usuario
    this.sessionUserData = sessionStorage.getItem('userData');
    const data = [JSON.parse(this.sessionUserData)]; // Convertir a array
    this.userData = [data[0]];

    // Asignamos los valores de URLs
    this.urlLinkedin = data[0]?.url_linkedin;
    this.urlInstagram = data[0]?.url_instagram;
    this.urlFacebook = data[0]?.url_facebook;
    this.urlYoutube = data[0]?.url_youtube;
  }
}
