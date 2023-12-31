import { ContactForm } from './../../model/contactForm.interface';
import { ContactService } from './../../services/contact.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss'],
})
export class FormContactComponent implements OnInit {
  // Declaramos las variables de almacenamiento de datos de usuario
  sessionUserData: any;
  public userData: any[] = [];

  // Declaramos las variables de información de usuario
  public nameUser: string = '';
  public lastNameUser: string = '';

  // Declaramos las variables de almacenamiento de url
  public urlLinkedin: string = '';
  public urlInstagram: string = '';
  public urlFacebook: string = '';
  public urlYoutube: string = '';
  //Declaramos la variable de formulario reactivo
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private contactSVC: ContactService
  ) {
    this.form = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(30),
      ]),
    });
  }

  ngOnInit(): void {
    // Recuperamos los datos del usuario
    this.sessionUserData = sessionStorage.getItem('userData');
    const data = [JSON.parse(this.sessionUserData)]; // Convertir a array
    this.userData = [data[0]];

    // Asignalos los valore de información de usuario
    this.nameUser = data[0]?.name;
    this.lastNameUser = data[0]?.last_name;

    // Asignamos los valores de URLs
    this.urlLinkedin = data[0]?.url_linkedin;
    this.urlInstagram = data[0]?.url_instagram;
    this.urlFacebook = data[0]?.url_facebook;
    this.urlYoutube = data[0]?.url_youtube;
  }

  contactData() {
    const contactData: ContactForm = this.form.value;
    console.log(contactData);
    if (this.form.invalid) {
      this.contactSVC.sendContactForm(contactData).subscribe((data) => {
        console.log(data);
        this.form.reset();
      });
    }
  }
}
