import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuService } from './services/menu-service';
import { NavController } from '@ionic/angular';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [MenuService, InAppBrowser]
})

export class AppComponent {
  public appPages = [];
  public subMenu = [];
  headerMenuItem = {
    'image': ''
  }
  isEnabledRTL: boolean = false;
  isSubmenu: boolean = false;
  socialData: string;

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private menuService: MenuService,
    private navController: NavController,
    private iab: InAppBrowser
  ) {
    this.isEnabledRTL = localStorage.getItem('isEnabledRTL') == "true";
    // console.log(JSON.stringify(exportService.export()));
    this.initializeApp();
    this.appPages = this.menuService.getAllThemes()
    this.subMenu = this.menuService.getSubmenuList()
    this.headerMenuItem = this.menuService.getDataForTheme(null)
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('#000000');
      this.setRTL();
    });
  }

  setRTL() {
    document.getElementsByTagName('html')[0]
            .setAttribute('dir', this.isEnabledRTL  ? 'rtl': 'ltr');
  }

  openPage(page) {
    this.navController.navigateRoot([page.url], {});
  }

  openSubmenu() {
    this.isSubmenu = true;
  }

  isRedirect(page) {
    if (page.redirect) {
      return true;
    }

    return false;
  }

  backMainMenu() {
    this.isSubmenu = false;
  }

  isSocial(page) {
    if(page.social) {
      return true;
    }
    else {
      return false
    }
  }

  openSocial(data) {
    const browser = this.iab.create(data.link);
    browser.show();
  }

  openExternal(data) {
    const browser = this.iab.create(data.redirect);
    browser.show();
  }
}
