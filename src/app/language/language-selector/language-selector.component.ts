import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {



  constructor( public translate: TranslateService ) {}

  ngOnInit(): void {
    this.translate.use('es');
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }

}
