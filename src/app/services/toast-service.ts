import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {

  constructor(public toastController: ToastController) {}

  async presentToast(message: string) {
    const toast = await this
            .toastController
            .create({'position': 'bottom', 'duration': 2000, 'message': message});
    toast.present();
  }
}
