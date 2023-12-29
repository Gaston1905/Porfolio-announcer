import { ComponentsModule } from './../components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { HeroComponent } from './hero/hero.component';
import { ButtonUpComponent } from './button-up/button-up.component';
import { ContactNavComponent } from './contact-nav/contact-nav.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageModule } from '../language/language.module';
import { LoadingComponent } from './loading/loading.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmComponent } from './modal/confirm/confirm.component';
import { SuccessComponent } from './modal/success/success.component';
import { ErrorComponent } from './modal/error/error.component';
import { FormProjectComponent } from './modal/form-project/form-project.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeroComponent,
    FooterComponent,
    ContactNavComponent,
    ButtonUpComponent,
    LoadingComponent,
    ConfirmComponent,
    SuccessComponent,
    ErrorComponent,
    FormProjectComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    LanguageModule,
    TranslateModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeroComponent,
    FooterComponent,
    ContactNavComponent,
    ButtonUpComponent,
    LoadingComponent,
  ],
})
export class SharedModule {}
