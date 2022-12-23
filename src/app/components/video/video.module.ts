

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {YouTubePlayerModule} from '@angular/youtube-player';

import { ActingComponent } from './acting/acting1/acting.component';
import { Acting2Component } from './acting/acting2/acting2.component';
import { Acting3Component } from './acting/acting3/acting3.component';
import { Commercial2Component } from './commercial/commercial2/commercial2.component';
import { Commercial3Component } from './commercial/commercial3/commercial3.component';
import { CommercialComponent } from './commercial/commercial1/commercial.component';
import { Dubbing2Component } from './dubbing/dubbing2/dubbing2.component';
import { Dubbing3Component } from './dubbing/dubbing3/dubbing3.component';
import { DubbingComponent } from './dubbing/dubbing1/dubbing.component';
import { VoiceOverComponent } from './voice-over/voice-over1/voice-over.component';
import { VoiceOver2Component } from './voice-over/voice-over2/voice-over2.component';
import { VoiceOver3Component } from './voice-over/voice-over3/voice-over3.component';
import { InstitutionalComponent } from './institutional/institutional1/institutional.component';
import { Institutional2Component } from './institutional/institutional2/institutional2.component';
import { Institutional3Component } from './institutional/institutional3/institutional3.component';



@NgModule({
  declarations: [
    CommercialComponent,
    Commercial2Component,
    Commercial3Component,
    DubbingComponent,
    Dubbing2Component,
    Dubbing3Component,
    InstitutionalComponent,
    Institutional2Component,
    Institutional3Component,
    VoiceOverComponent,
    VoiceOver2Component,
    VoiceOver3Component,
    ActingComponent,
    Acting2Component,
    Acting3Component,
  ],
  imports: [
    CommonModule,
    YouTubePlayerModule
  ],
  exports: [
    CommercialComponent,
    Commercial2Component,
    Commercial3Component,
    DubbingComponent,
    Dubbing2Component,
    Dubbing3Component,
    InstitutionalComponent,
    Institutional2Component,
    Institutional3Component,
    VoiceOverComponent,
    VoiceOver2Component,
    VoiceOver3Component,
    ActingComponent,
    Acting2Component,
    Acting3Component,
  ]
})
export class VideoModule { }
