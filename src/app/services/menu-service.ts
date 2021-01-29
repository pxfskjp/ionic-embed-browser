import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class MenuService implements IService {

  constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

  getId = (): string => 'menu';

  getTitle = (): string => 'Altares';

  //* Data Set for main menu
  getAllThemes = (): Array<any> => {
    return [
      {
        'url': 'home',
        'title': 'Home',
        'theme': 'Home',
        'icon': 'icon-home',
        'listView': true,
        'component': '',
        'singlePage': false
      },
      {
        'url': 'altares-lists',
        'title': 'Altares',
        'theme': 'Altares',
        'icon': 'icon-desktop-mac',
        'listView': true,
        'component': '',
        'singlePage': false
      },
      {
        'url': 'message',
        'title': 'Mensajes',
        'theme': 'Mensajes',
        'icon': 'icon-tooltip-text',
        'listView': true,
        'component': '',
        'singlePage': false
      },
      {
        'redirect': 'https://mviqueretaro.org/',
        'title': 'En su presencia',
        'theme': 'En su presencia',
        'icon': 'icon-account-circle',
        'listView': true,
        'component': '',
        'singlePage': false
      },
      {
        'social': true,
        'title': 'Redes sociales',
        'theme': 'Redes sociales',
        'icon': 'icon-share-variant',
        'listView': true,
        'component': '',
        'singlePage': false,
        'sub_menu': true
      },
      {
        'url': 'home',
        'title': 'Proximos Eventos',
        'theme': 'Proximos Eventos',
        'icon': 'icon-calendar-today',
        'listView': true,
        'component': '',
        'singlePage': false
      },
      {
        'url': 'more-events',
        'title': 'Mas contenido',
        'theme': 'Mas contenido',
        'icon': 'icon-calendar-today',
        'listView': true,
        'component': '',
        'singlePage': false
      },
      {
        'url': 'donate',
        'title': 'Donativos',
        'theme': 'Donativos',
        'icon': 'icon-tag-text-outline',
        'listView': true,
        'component': '',
        'singlePage': false
      },
    ];
  }

  getSubmenuList = (): Array<any> => {
    return [
      {
        'link': 'https://es-la.facebook.com/MVInternacional/ ',
        'title': 'Facebook',
        'theme': 'Facebook',
        'icon': ' icon-facebook-box',
      },
      {
        'link': 'https://www.youtube.com/channel/UCBNaLp2ktjmWv3BsGNhE79w',
        'title': 'Youtube',
        'icon': 'icon-youtube-play',
      },
      {
        'link': 'https://www.instagram.com/fabimanzewitsch/',
        'title': 'Instagram',
        'theme': 'Instagram',
        'icon': 'icon-instagram',
      },
      {
        'link': 'https://twitter.com/jcmanzewitsch1',
        'title': 'Jan C. Manzewitsch',
        'theme': 'Jan C. Manzewitsch',
        'icon': 'icon-twitter-box',
      },
      {
        'link': 'https://twitter.com/fabymanzewitsch',
        'title': 'Fabi Manzewitsch',
        'theme': 'Fabi Manzewitsch',
        'icon': 'icon-twitter-box',
      },
    ];
  }

  getDataForTheme = (menuItem: any) => {
    return {
      'image': 'assets/imgs/logo/altares-white.png',
    };
  }

  getEventsForTheme = (menuItem: any): any => {
    return {};
  }

  prepareParams = (item: any) => {
    return {
      title: item.title,
      data: {},
      events: this.getEventsForTheme(item)
    };
  }

  load(item: any): Observable<any> {
    this.loadingService.show();
    if (AppSettings.IS_FIREBASE_ENABLED) {
      return new Observable(observer => {
        this.af
          .object('menu')
          .valueChanges()
          .subscribe(snapshot => {
            this.loadingService.hide();
            observer.next(snapshot);
            observer.complete();
          }, err => {
            this.loadingService.hide();
            observer.error([]);
            observer.complete();
          });
      });
    } else {
      return new Observable(observer => {
        this.loadingService.hide();
        observer.next(this.getDataForTheme(item));
        observer.complete();
      });
    }
  }
}
