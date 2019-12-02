import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlide } from '@ionic/angular';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent implements OnInit {
  @ViewChild('slide', {static: false}) slide;

  slidesOpts: any = {
    effect: 'fade',
    speed: 400,
    loop: true,
    autoplay: true
  }

  constructor() { }

  ngOnInit() {}

  slideDidChange() {
    this.slide.startAutoplay();
  }

}
