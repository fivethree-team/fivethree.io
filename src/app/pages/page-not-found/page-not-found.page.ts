import { Component, OnInit } from '@angular/core';
import { LottieAnimation } from '@fivethree/lottie';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.page.html',
  styleUrls: ['./page-not-found.page.scss']
})
export class PageNotFoundPage implements OnInit {
  lottieConfig: Object;
  animation: LottieAnimation;

  constructor() {
    this.lottieConfig = {
      path: 'assets/lottie/empty_box.json',
      renderer: 'canvas',
      autoplay: false,
      loop: false
    };
  }

  ngOnInit() {}

  handleAnimation(animation: LottieAnimation) {
    this.animation = animation;
    this.animation.setSpeed(0.8);
    this.animation.play();
  }
}
