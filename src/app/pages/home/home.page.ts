import { Component } from '@angular/core';
import { HomeService } from './../../services/home-service';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { ToastService } from 'src/app/services/toast-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [HomeService]
})
export class HomePage {

  data = {};
  type: string;
    
  constructor(
    private homeService:HomeService, 
    public modalController: ModalController,
    private toastCtrl : ToastService,
    private route : ActivatedRoute,
    ) { 
      this.data = this.homeService.getData();
  }

  onItemClick(params): void {
    this.toastCtrl.presentToast('onItemClick');
  }
}

