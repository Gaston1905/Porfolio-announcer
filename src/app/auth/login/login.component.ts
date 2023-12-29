import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MDBModalRef } from 'angular-bootstrap-md';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public formLogin!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    public modalRef: MDBModalRef
  ) {}

  ngOnInit(): void {
    //Inicialización del formulario de login
    this.formLogin = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl(''),
    });
  }

  //suscripción al servicio de logueo
  public login() {
    const payload = this._payload();
    console.log(payload);
    this.authService.login(payload).subscribe({
      next: (res: any) => {
        console.log(res);
        this.authService.setToken(res);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      },
    });
  }

  //payload login
  _payload() {
    const payload = {
      username: this.formLogin.value.username,
      password: this.formLogin.value.password,
    };
    return payload;
  }
}
