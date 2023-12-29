import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { Observable, of, switchMap } from 'rxjs';
import { Project } from 'src/app/model/project.interface';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-form-project',
  templateUrl: './form-project.component.html',
  styleUrls: ['./form-project.component.scss'],
})
export class FormProjectComponent implements OnInit {
  public project: Project[] | null = null;
  public formProject!: FormGroup;
  constructor(
    public modalRef: MDBModalRef,
    private modalService: MDBModalService,
    private formBuilder: FormBuilder,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    //Inicio de formulario con sus respectivos campos
    this.formProject = this.formBuilder.group({
      description: new FormControl('', [
        Validators.required,
        Validators.maxLength(200),
      ]),
      category_first: new FormControl('', Validators.required),
      category_optional: new FormControl(''),
      link: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  clickAction(action: string) {
    switch (action) {
      case 'create':
        this.createProject();
        break;

      default:
        break;
    }
  }

  // Suscripción al servicio para la creación de un proyecto
  createProject() {
    this._payloadCreate().subscribe({
      next: (payload: any) => {
        console.log(payload);
        this.projectService.createProject(payload).subscribe({
          next: (res: any) => {
            console.log(res);
          },
          error: (error: HttpErrorResponse) => {
            console.log(error);
          },
        });
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  // payload Crear Proyecto
  _payloadCreate(): Observable<any> {
    return this._categoryCreate().pipe(
      switchMap((category: any[]) => {
        const payload = {
          description: this.formProject.value.description
            ? this.formProject.value.description
            : null,
          category: category ? category : null,
          link: this.formProject.value.link
            ? this.formProject.value.link
            : null,
        };
        return of(payload);
      })
    );
  }

  // Construimos el array de categorias para el payload de crear proyecto
  _categoryCreate(): Observable<any> {
    let category: any[] = [];

    if (this.formProject.value.category_optional !== '') {
      category.push(this.formProject.value.category_first);
      category.push(this.formProject.value.category_optional);
    } else {
      category.push(this.formProject.value.category_first);
    }
    // Devuelve el array category como un Observable
    return of(category);
  }
}
