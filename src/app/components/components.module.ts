import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanguageModule } from '../language/language.module';
import { TranslateModule } from '@ngx-translate/core';

import { VideoModule } from './video/video.module';
import { CarrouselModule } from './carrousel/carrousel.module';

import { ProjectsComponent } from './projects/projects.component';
import { FormContactComponent } from './form-contact/form-contact.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [

    FormContactComponent,
    ProjectsComponent,
  ],
  imports: [
    CommonModule,
    CarrouselModule,
    VideoModule,
    ReactiveFormsModule,
    HttpClientModule,
    LanguageModule,
    TranslateModule
  ],
  exports: [
    FormContactComponent,
    ProjectsComponent,
  ]
})
export class ComponentsModule { }
