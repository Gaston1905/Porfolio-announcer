import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CarrouselModule } from './components/carrousel/carrousel.module';

import { VideoModule } from './components/video/video.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactNavComponent } from './components/contact-nav/contact-nav.component';
import { ButtonUpComponent } from './components/button-up/button-up.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ProjectsComponent,
    FormContactComponent,
    FooterComponent,
    ContactNavComponent,
    ButtonUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VideoModule,
    CarrouselModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
