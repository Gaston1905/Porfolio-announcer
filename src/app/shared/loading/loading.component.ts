import { animate, style, state, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  animations: [
    trigger('fadeOut', [
      state(
        'void',
        style({
          opacity: 0,
        })
      ),
      transition(':enter', [style({ opacity: 1 }), animate(1000)]),
      transition(':leave', [animate(1000, style({ opacity: 0 }))]),
    ]),
  ],
})
export class LoadingComponent {
  @Input() showLoading: boolean = true;
  public fadeState: string = 'void';

  ngOnInit() {
    this.fadeState = this.showLoading ? 'void' : 'out';
  }

  hideLoading() {
    this.showLoading = false;
    this.fadeState = 'out';
  }
}
