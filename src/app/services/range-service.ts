import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class RangeService implements IService {

  constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

  getTitle = (): string => 'Range';

  getAllThemes = (): Array<any> => {
    return [
      { 'url': 'range/0', 'title': 'All', 'theme': 'layout1' },
    ];
  }

  // Set Data For Range Services
  getDataForTheme = (menuItem: any): any => {
    return {
      'toolbarTitle': 'All',
      // Set Data For Range Services - BASIC
      'layout1': {
        'title': 'BASIC',
        'value': 10
      },

      // Set Data For Range Services - WITH ICONS
      'layout2': {
        'title': 'WITH ICONS',
        'iconLeft': 'icon-volume-low',
        'iconRight': 'icon-volume-high',
        'min': '-200',
        'max': '200',
        'value': 0
      },

      // Set Data For Range Services - WITH PREDEFINED STEPS
      'layout3': {
        'textLeft': 'A',
        'textRight': 'A',
        'title': 'WITH PREDEFINED STEPS',
        'min': '1000',
        'max': '2000',
        'step': '100',
        'value': 20
      },

      // Set Data For Range Services - TWO SLIDERS
      'layout4': {
        'title': 'TWO SLIDERS',
        'min': '1',
        'max': '100',
        'step': '10',
        'value': {
          'lower': 20,
          'upper': 70
        },
        'textLeft': '1',
        'textRight': '10'
      }
    };
  }

  load(item: any): Observable<any> {
    this.loadingService.show();
    if (AppSettings.IS_FIREBASE_ENABLED) {
      return new Observable(observer => {
        this.af
          .object('ranges')
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
