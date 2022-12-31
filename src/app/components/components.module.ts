import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoModule } from './video/video.module';
import { CarrouselModule } from './carrousel/carrousel.module';
import { ProjectsComponent } from './projects/projects.component';
import { FormContactComponent } from './form-contact/form-contact.component';


@NgModule({
  declarations: [

    FormContactComponent,
    ProjectsComponent,
  ],
  imports: [
    CommonModule,
    CarrouselModule,
    VideoModule
  ],
  exports: [
    FormContactComponent,
    ProjectsComponent,
  ]
})
export class ComponentsModule { }
