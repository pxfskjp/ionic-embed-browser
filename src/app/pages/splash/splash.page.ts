import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss']
})
export class SplashPage implements OnInit {

  splashScreenData = {};

  constructor(public navCtrl: NavController) {
    this.splashScreenData = {
      'headerTitle': 'Altares',
      'duration': 3000,
      'backgroundImage': 'assets/imgs/background/background.png',
      'logo': 'assets/imgs/logo/altares-white.png',
      'title': ''
  }; 
}

  ngOnInit() {
  }

  inredirect(): void {
    let url = "home"
    this.navCtrl.navigateRoot([url], {});
  }
}
