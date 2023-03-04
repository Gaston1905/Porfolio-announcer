import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  template: './commercial.component.html',
  selector: 'app-commercial',
})
export class CommercialComponent implements OnInit {
  private apiLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.apiLoaded) {
      const tag = document.createElement('script');

      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
    }
    this.apiLoaded = true;
  }
}
