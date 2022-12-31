import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactForm } from '../model/contactForm.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor( private http: HttpClient) { }

  url_API = 'http://localhost:3000'

  sendContactForm(contactData: ContactForm) {
    return this.http.post(`${this.url_API}/sendContactForm`, contactData);
  }
}
