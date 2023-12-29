import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ProjectMock } from 'src/app/mock/project.mock';
import { Project } from 'src/app/model/project.interface';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  // Variable para almacenar los observadores
  youtubeObservers: IntersectionObserver[] = [];
  projectData: Project[] = ProjectMock;

  constructor(
    private sanitizer: DomSanitizer,
    private projectService: ProjectService
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
