import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrouselCommercialComponent } from './carrouselCommercial/carrousel-commercial/carrousel-commercial.component';
import { VideoModule } from '../video/video.module';
import { CarrouselDubbingComponent } from './carrouselDubbing/carrousel-dubbing/carrousel-dubbing.component';
import { CarrouselIntitutionalComponent } from './carrouselIntitutional/carrousel-intitutional/carrousel-intitutional.component';
import { CarrouselVoiceOverComponent } from './carrouselVoiceOver/carrousel-voice-over/carrousel-voice-over.component';
import { CarrouselActingComponent } from './carrouselActing/carrousel-acting/carrousel-acting.component';



@NgModule({
  declarations: [
    CarrouselCommercialComponent,
    CarrouselDubbingComponent,
    CarrouselIntitutionalComponent,
    CarrouselVoiceOverComponent,
    CarrouselActingComponent
  ],
  imports: [
    CommonModule,
    VideoModule
  ],
  exports: [
    CarrouselCommercialComponent,
    CarrouselDubbingComponent,
    CarrouselIntitutionalComponent,
    CarrouselVoiceOverComponent,
    CarrouselActingComponent
  ]
})
export class CarrouselModule { }
