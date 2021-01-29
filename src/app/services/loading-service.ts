import { LoadingController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  loading: any;
  constructor(private loadingCtrl: LoadingController) { }

  show() {
    // this.loading = this.loadingCtrl.create({
    // message: 'Please wait...'
    // });
    // this.loading.present();
  }

  hide() {
    // this.loading.dismiss();
  }
}
