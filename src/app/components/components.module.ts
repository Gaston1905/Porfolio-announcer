import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanguageModule } from '../language/language.module';
import { TranslateModule } from '@ngx-translate/core';

import { ProjectsComponent } from './projects/projects.component';
import { FormContactComponent } from './form-contact/form-contact.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LineaDirective } from './linea.directive';

@NgModule({
  declarations: [FormContactComponent, ProjectsComponent, LineaDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    LanguageModule,
    TranslateModule,
  ],
  exports: [FormContactComponent, ProjectsComponent],
})
export class ComponentsModule {}
