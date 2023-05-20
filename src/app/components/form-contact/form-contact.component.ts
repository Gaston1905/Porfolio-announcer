import { ContactForm } from './../../model/contactForm.interface';
import { ContactService } from './../../services/contact.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent implements OnInit {

  form!: FormGroup;

  constructor( private formBuilder: FormBuilder,
               private contactSVC: ContactService
              ) {

                this.form = this.formBuilder.group({
                  name: new FormControl('', [Validators.required, Validators.minLength(2)]),
                  email: new FormControl('', [Validators.required, Validators.email]),
                  message: new FormControl('',  [Validators.required, Validators.minLength(30)])
                })

               }

  ngOnInit(): void { }

  contactData() {

    const contactData: ContactForm = this.form.value;
    console.log(contactData)
    if(this.form.invalid) {
      this.contactSVC.sendContactForm(contactData).subscribe((data) => {
        console.log(data)
          this.form.reset();
      })
    }
  }

}
