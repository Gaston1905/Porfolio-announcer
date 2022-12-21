import { VoiceOverComponent } from './voice-over/voice-over.component';
import { InstitutionalComponent } from './institutional/institutional.component';
import { DubbingComponent } from './dubbing/dubbing.component';
import { CommercialComponent } from './commercial/commercial.component';
import { ActingComponent } from './acting/acting.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {YouTubePlayerModule} from '@angular/youtube-player';



@NgModule({
  declarations: [
    ActingComponent,
    CommercialComponent,
    DubbingComponent,
    InstitutionalComponent,
    VoiceOverComponent
  ],
  imports: [
    CommonModule,
    YouTubePlayerModule
  ],
  exports: [
    ActingComponent,
    CommercialComponent,
    DubbingComponent,
    InstitutionalComponent,
    VoiceOverComponent
  ]
})
export class VideoModule { }
