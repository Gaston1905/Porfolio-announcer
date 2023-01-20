import { ComponentsModule } from './../components/components.module';
import { TranslateModule } from '@ngx-translate/core';
import { HeroComponent } from './hero/hero.component';
import { ButtonUpComponent } from './button-up/button-up.component';
import { ContactNavComponent } from './contact-nav/contact-nav.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageModule } from '../language/language.module';

@NgModule({
  declarations: [
    HeroComponent,
    FooterComponent,
    ContactNavComponent,
    ButtonUpComponent,
  ],
  imports: [CommonModule, ComponentsModule, LanguageModule, TranslateModule],
  exports: [
    HeroComponent,
    FooterComponent,
    ContactNavComponent,
    ButtonUpComponent,
  ],
})
export class SharedModule {}
