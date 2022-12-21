import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommercialComponent } from './components/video/commercial/commercial.component';
import { VoiceOverComponent } from './components/video/voice-over/voice-over.component';
import { ActingComponent } from './components/video/acting/acting.component';
import { InstitutionalComponent } from './components/video/institutional/institutional.component';
import { DubbingComponent } from './components/video/dubbing/dubbing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    ProjectsComponent,
    FormContactComponent,
    FooterComponent,
    CommercialComponent,
    VoiceOverComponent,
    ActingComponent,
    InstitutionalComponent,
    DubbingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
