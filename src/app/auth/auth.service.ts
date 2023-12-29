import { Injectable, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  public loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // Inicializamos el formulario de login
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
}
