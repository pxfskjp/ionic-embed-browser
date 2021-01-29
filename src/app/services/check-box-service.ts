import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class CheckBoxService implements IService {

  constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

  getTitle = (): string => 'Check Boxes';

  getAllThemes = (): Array<any> => {
    return [
      { 'url': 'check-boxes/0', 'title': 'Simple', 'theme': 'layout1' },
      { 'url': 'check-boxes/1', 'title': 'With Avatar', 'theme': 'layout2' },
      { 'url': 'check-boxes/2', 'title': 'Simple 2', 'theme': 'layout3' }
    ];
  }

  getDataForTheme = (menuItem: any): any => {
    return this[
      'getDataFor' +
      menuItem.theme.charAt(0).toUpperCase() +
      menuItem.theme.slice(1)
    ]();
  }

  //* Data Set for page 1
  getDataForLayout1 = (): any => {
    return {
      'toolbarTitle': 'Simple',
      'items':[
        {
          'id': 1,
          'title': 'Song',
          'icon': '',
          'favorite': false,
          'image': ''
        },
        {
          'id': 2,
          'title': 'Album',
          'icon': '',
          'favorite': false,
          'image': ''
        },
        {
          'id': 3,
          'title': 'Artist',
          'icon': '',
          'favorite': false,
          'image': ''
        },
        {
          'id': 4,
          'title': 'Song',
          'icon': '',
          'favorite': true,
          'image': ''
        },
        {
          'id': 5,
          'title': 'Album',
          'icon': '',
          'favorite': false,
          'image': ''
        },
        {
          'id': 6,
          'title': 'Artist',
          'icon': '',
          'favorite': false,
          'image': ''
        },
        {
          'id': 7,
          'title': 'Song',
          'icon': '',
          'favorite': false,
          'image': ''
        },
        {
          'id': 8,
          'title': 'Album',
          'icon': '',
          'favorite': false,
          'image': ''
        },
        {
          'id': 9,
          'title': 'Artist',
          'icon': '',
          'favorite': false,
          'image': ''
        },
        {
          'id': 10,
          'title': 'Song',
          'icon': '',
          'favorite': true,
          'image': ''
        },
        {
          'id': 11,
          'title': 'Album',
          'icon': '',
          'favorite': false,
          'image': ''
        },
        {
          'id': 12,
          'title': 'Artist',
          'icon': '',
          'favorite': false,
          'image': ''
        },
        {
          'id': 13,
          'title': 'Song',
          'icon': '',
          'favorite': false,
          'image': ''
        },
        {
          'id': 14,
          'title': 'Album',
          'icon': '',
          'favorite': false,
          'image': ''
        },
        {
          'id': 15,
          'title': 'Artist',
          'icon': '',
          'favorite': false,
          'image': ''
        },
        {
          'id': 16,
          'title': 'Song',
          'icon': '',
          'favorite': true,
          'image': ''
        },
        {
          'id': 17,
          'title': 'Album',
          'icon': '',
          'favorite': false,
          'image': ''
        },
        {
          'id': 18,
          'title': 'Artist',
          'icon': '',
          'favorite': false,
          'image': ''
        },
        {
          'id': 19,
          'title': 'Song',
          'icon': '',
          'favorite': false,
          'image': ''
        },
        {
          'id': 20,
          'title': 'Album',
          'icon': '',
          'favorite': false,
          'image': ''
        },
        {
          'id': 21,
          'title': 'Artist',
          'icon': '',
          'favorite': false,
          'image': ''
        },
        {
          'id': 22,
          'title': 'Song',
          'icon': '',
          'favorite': true,
          'image': ''
        },
        {
          'id': 23,
          'title': 'Album',
          'icon': '',
          'favorite': false,
          'image': ''
        },
        {
          'id': 24,
          'title': 'Artist',
          'icon': '',
          'favorite': false,
          'image': ''
        },
        {
          'id': 25,
          'title': 'Song',
          'icon': '',
          'favorite': false,
          'image': ''
        }
      ]
    }
  }

  //* Data Set for page 2
  getDataForLayout2 = (): any => {
    return {
      'toolbarTitle': 'With Avatar',
      'items':[
        {
          'id': 1,
          'title': 'Vanessa Ryan',
          'icon': '',
          'favorite': true,
          'image': 'assets/imgs/avatar/1.jpg'
        },
        {
          'id': 2,
          'title': 'Lara Lynn',
          'icon': '',
          'favorite': false,
          'image': 'assets/imgs/avatar/2.jpg'
        },
        {
          'id': 3,
          'title': 'Gayle Gaines',
          'icon': '',
          'favorite': false,
          'image': 'assets/imgs/avatar/3.jpg'
        },
        {
          'id': 4,
          'title': 'Barbara Bernard',
          'icon': '',
          'favorite': false,
          'image': 'assets/imgs/avatar/4.jpg'
        },
        {
          'id': 5,
          'title': 'Josefa Gardner',
          'icon': '',
          'favorite': false,
          'image': 'assets/imgs/avatar/5.jpg'
        },
        {
          'id': 6,
          'title': 'Juliette Medina',
          'icon': '',
          'favorite': true,
          'image': 'assets/imgs/avatar/6.jpg'
        }
      ]
    }
  }

  //* Data Set for page 3
  getDataForLayout3 = (): any => {
    return {
      'toolbarTitle': 'Simple 2',
      'items':[
        {
          'id': 1,
          'title': 'Song',
          'favorite': true,
          'icon': 'icon-music-box'
        },
        {
          'id': 2,
          'title': 'Album',
          'favorite': false,
          'icon': 'icon-music-box'
        },
        {
          'id': 3,
          'title': 'Artist',
          'favorite': false,
          'icon': 'icon-music-box'
        },
        {
          'id': 4,
          'title': 'Song',
          'favorite': true,
          'icon': 'icon-music-box'
        },
        {
          'id': 5,
          'title': 'Album',
          'favorite': false,
          'icon': 'icon-music-box'
        },
        {
          'id': 6,
          'title': 'Artist',
          'favorite': false,
          'icon': 'icon-music-box'
        }
      ]
    }
  }

  load(item: any): Observable<any> {
    const that = this;
    that.loadingService.show();
    if (AppSettings.IS_FIREBASE_ENABLED) {
      return new Observable(observer => {
        this.af
          .object('checkBoxes/' + item.theme)
          .valueChanges()
          .subscribe(snapshot => {
            that.loadingService.hide();
            observer.next(snapshot);
            observer.complete();
          }, err => {
            that.loadingService.hide();
            observer.error([]);
            observer.complete();
          });
      });
    } else {
      return new Observable(observer => {
        that.loadingService.hide();
        observer.next(this.getDataForTheme(item));
        observer.complete();
      });
    }
  }
}
