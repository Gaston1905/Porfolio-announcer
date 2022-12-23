import { Component, OnInit } from '@angular/core';

@Component({
  template: '<iframe class="rounded rounded-4" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="Baby Shark Dance | #babyshark Most Viewed Video | Animal Songs | PINKFONG Songs for Children" width="550" height="350" src="https://www.youtube.com/embed/XqZsoesa55w?enablejsapi=1&amp;origin=http://localhost:4200/home;widgetid=1" sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox" id="widget2"></iframe>',
  selector: 'app-voice-over',
})
export class VoiceOverComponent implements OnInit {

  apiLoaded = false;

  constructor() { }

  ngOnInit(): void {

    if(!this.apiLoaded) {
      const tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }
    this.apiLoaded = true;
  }

}
