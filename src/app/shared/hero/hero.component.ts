import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  showVideo: boolean = false;

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('es');
  }

  ngOnInit(): void {}
}
