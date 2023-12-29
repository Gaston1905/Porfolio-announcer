import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { ProjectService } from 'src/app/services/project.service';
import { SuccessComponent } from '../success/success.component';
import { ErrorComponent } from '../error/error.component';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
})
export class ConfirmComponent implements OnInit {
  public id: number | null = null;

  private modalOptions = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: '',
    containerClass: '',
    animated: true,
    data: {},
  };

  constructor(
    private projectService: ProjectService,
    public modalRef: MDBModalRef,
    private modalService: MDBModalService
  ) {}
  ngOnInit(): void {}

  clickAction(action: string, data: any) {
    switch (action) {
      case 'delete':
        this.deleteProject(data);
        break;

      default:
        break;
    }
  }

  //Eliminar proyecto
  deleteProject(data: number): void {
    const id = data;
    this.projectService.deleteProject(id).subscribe({
      next: (res: any) => {
        this.succesDelete(res);
      },
      error: (error: HttpErrorResponse) => {
        this.errorDelete(error);
      },
    });
  }

  succesDelete(res: any) {
    const response = res.message;
    this.modalOptions.data = { response };
    this.modalRef = this.modalService.show(SuccessComponent, this.modalOptions);
  }

  errorDelete(error: any) {
    const response = error.error.error;
    this.modalOptions.data = { response };
    this.modalRef = this.modalService.show(ErrorComponent, this.modalOptions);
  }
}
