import { Component } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
})
export class SuccessComponent {
  public response: string | null = null;
  constructor(public modalRef: MDBModalRef) {
    console.log(this.response);
  }
}
