import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { AuthService } from 'src/app/auth/auth.service';
import { ProjectMock } from 'src/app/mock/project.mock';
import { Project } from 'src/app/model/project.interface';
import { ProjectService } from 'src/app/services/project.service';
import { ConfirmComponent } from 'src/app/shared/modal/confirm/confirm.component';
import { FormProjectComponent } from 'src/app/shared/modal/form-project/form-project.component';
import { SuccessComponent } from 'src/app/shared/modal/success/success.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  // Variables de ingreso de datos
  @Input() isLogged: boolean = false;
  // Variable para almacenar los observadores
  youtubeObservers: IntersectionObserver[] = [];
  // Variable para referenciar información de modal
  modalRef: MDBModalRef | null = null;
  // Mock
  projectData: Project[] = ProjectMock;

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
    private sanitizer: DomSanitizer,
    private projectService: ProjectService,
    private modalService: MDBModalService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getProjectData();
  }

  //Cargar data de los proyectos
  getProjectData(): void {
    this.projectService.getListProject().subscribe({
      next: (res: Project[]) => {
        console.log(res);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      },
    });
  }

  //Crear proyecto
  createProject() {
    this.modalRef = this.modalService.show(FormProjectComponent);
  }

  // Actualizar proyecto
  updateProject(project: Project) {
    this.modalOptions.data = { project };
    this.modalRef = this.modalService.show(
      FormProjectComponent,
      this.modalOptions
    );
  }

  // Eliminar proyecto
  deleteProject(id: number) {
    this.modalOptions.data = { id };
    this.modalRef = this.modalService.show(ConfirmComponent, this.modalOptions);
  }

  // Función para cargar el embebido de YouTube cuando sea visible
  loadYouTubeEmbed(embedElement: HTMLIFrameElement) {
    const videoSrc = embedElement.getAttribute('data-src');
    if (videoSrc) {
      embedElement.setAttribute('src', videoSrc);
    }
  }

  // Función de devolución de llamada para el observador de intersección
  intersectionCallback(
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const embedElement = entry.target as HTMLIFrameElement;
        this.loadYouTubeEmbed(embedElement);
        observer.unobserve(embedElement);
      }
    });
  }

  // Función para iniciar los observadores de intersección en los elementos embebidos de YouTube
  initializeYouTubeObservers() {
    const embedElements = document.querySelectorAll('iframe[data-src]');
    embedElements.forEach((embedElement) => {
      const observer = new IntersectionObserver(
        this.intersectionCallback.bind(this),
        { threshold: 0.1 }
      );
      observer.observe(embedElement);
      this.youtubeObservers.push(observer);
    });
  }

  //Forma segura de manejar URLs
  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
