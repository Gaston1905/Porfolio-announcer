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
import { UserService } from '../user.service';

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
    public modalRef: MDBModalRef,
    private userService: UserService
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
        this.authService.setToken(res[0]);
        const userData = JSON.stringify(res[1]);
        sessionStorage.setItem('userData', userData);
        this.userService.setUserData(userData);
        window.location.reload();
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
