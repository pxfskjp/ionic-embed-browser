import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class ToggleService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

    getTitle = (): string => 'Toggle';

    getAllThemes = (): Array<any> => {
        return [
            { 'url': 'toggle/0', 'title': 'With avatars', 'theme': 'layout1' },
            { 'url': 'toggle/1', 'title': 'Simple 2', 'theme': 'layout2' },
            { 'url': 'toggle/2', 'title': 'Simple', 'theme': 'layout3' },
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
            'toolbarTitle': 'With avatars',
            'listTitle': 'With avatars',
            'items': [
                {
                    'id': 0,
                    'title': 'Graciela Mitchell',
                    'subtitle': 'mitchell@mail.com',
                    'isChecked': false,
                    'avatar': 'assets/imgs/avatar/0.jpg'
                },
                {
                    'id': 1,
                    'title': 'Sherry Hale ',
                    'subtitle': 'hale@gmail.com',
                    'isChecked': false,
                    'avatar': 'assets/imgs/avatar/1.jpg'
                },
                {
                    'id': 2,
                    'title': 'Erna Alexander',
                    'subtitle': 'alexander@mail.com',
                    'isChecked': false,
                    'avatar': 'assets/imgs/avatar/2.jpg'
                },
                {
                    'id': 3,
                    'title': 'Soto Edwards',
                    'subtitle': 'edwards@outlook.com',
                    'isChecked': false,
                    'avatar': 'assets/imgs/avatar/3.jpg'
                },
                {
                    'id': 4,
                    'title': 'Marcia Greer',
                    'subtitle': 'greer@outlook.com',
                    'isChecked': false,
                    'avatar': 'assets/imgs/avatar/4.jpg'
                },
                {
                    'id': 5,
                    'title': 'Janice Wilder',
                    'subtitle': 'wilder@yahoo.com',
                    'isChecked': false,
                    'avatar': 'assets/imgs/avatar/5.jpg'
                },
                {
                    'id': 6,
                    'title': 'Lindsey Mcgowan',
                    'subtitle': 'mcgowan@mail.com',
                    'isChecked': false,
                    'avatar': 'assets/imgs/avatar/6.jpg'
                },
                {
                    'id': 7,
                    'title': 'Lucy Bender',
                    'subtitle': 'bender@yahoo.com',
                    'isChecked': false,
                    'avatar': 'assets/imgs/avatar/7.jpg'
                },
                {
                    'id': 8,
                    'title': 'Wedi Michaeln',
                    'subtitle': 'michael@gmail.com',
                    'isChecked': false,
                    'avatar': 'assets/imgs/avatar/8.jpg'
                },
                {
                    'id': 9,
                    'title': 'Sophia Cochran',
                    'subtitle': 'cochran@yahoo.com',
                    'isChecked': false,
                    'avatar': 'assets/imgs/avatar/9.jpg'
                },
                {
                    'id': 10,
                    'title': 'Sherri Stokes',
                    'subtitle': 'stokes@mail.com',
                    'isChecked': false,
                    'avatar': 'assets/imgs/avatar/10.jpg'
                },
                {
                    'id': 11,
                    'title': 'Britney Soto',
                    'subtitle': 'soto@yahoo.com',
                    'isChecked': false,
                    'avatar': 'assets/imgs/avatar/11.jpg'
                },
                {
                    'id': 12,
                    'title': 'Lucile Mccormick',
                    'subtitle': 'mccormick@outlook.com',
                    'isChecked': false,
                    'avatar': 'assets/imgs/avatar/12.jpg'
                }
            ]
        };
    }

    //* Data Set for page 2
    getDataForLayout2 = (): any => {
        return {
            'toolbarTitle': 'Simple 2',
            'listTitle': 'Simple 2',
            'items': [
                {
                    'id': 1,
                    'title': 'mitchell@mail.com',
                    'subtitle': 'Graciela',
                    'isChecked': true
                },
                {
                    'id': 2,
                    'title': 'murray@yahoo.com',
                    'subtitle': 'Terrell',
                    'isChecked': false
                },
                {
                    'id': 4,
                    'title': 'hines@outlook.com',
                    'subtitle': 'Branch',
                    'isChecked': false
                },
                {
                    'id': 3,
                    'title': 'wade@outlook.com',
                    'subtitle': 'Jensen',
                    'isChecked': false
                },
                {
                    'id': 5,
                    'title': 'hale@gmail.com',
                    'subtitle': 'Sherry',
                    'isChecked': false
                },
                {
                    'id': 6,
                    'title': 'harrington@gmail.com',
                    'subtitle': 'Gail',
                    'isChecked': true
                },
                {
                    'id': 7,
                    'title': 'norman@mail.com',
                    'subtitle': 'Shawna',
                    'isChecked': false
                },
                {
                    'id': 8,
                    'title': 'alexander@mail.com',
                    'subtitle': 'Erna',
                    'isChecked': false
                },
                {
                    'id': 9,
                    'title': 'oneil@yahoo.com',
                    'subtitle': 'Cohen',
                    'isChecked': false
                }
            ]
        };
    }

    //* Data Set for page 3
    getDataForLayout3 = (): any => {
        return {
            'toolbarTitle': 'Simple',
            'listTitle': 'Simple',
            'items': [
                {
                    'id': 0,
                    'title': 'France',
                    'isChecked': true
                },
                {
                    'id': 1,
                    'title': 'Czech Republic',
                    'isChecked': false
                },
                {
                    'id': 2,
                    'title': 'Andorra',
                    'isChecked': false
                },
                {
                    'id': 3,
                    'title': 'Costa Rica',
                    'isChecked': false
                },
                {
                    'id': 4,
                    'title': 'Trinidad and Tobago',
                    'isChecked': true
                },
                {
                    'id': 5,
                    'title': 'St. Helena',
                    'isChecked': true
                },
                {
                    'id': 6,
                    'title': 'Maldives',
                    'isChecked': true
                },
                {
                    'id': 7,
                    'title': 'Tanzania',
                    'isChecked': false
                },
                {
                    'id': 8,
                    'title': 'Philippines',
                    'isChecked': false
                },
                {
                    'id': 9,
                    'title': 'Djibouti',
                    'isChecked': false
                },
                {
                    'id': 10,
                    'title': 'Brunei Darussalam',
                    'isChecked': false
                },
                {
                    'id': 11,
                    'title': 'Uzbekistan',
                    'isChecked': false
                },
                {
                    'id': 12,
                    'title': 'Moldova',
                    'isChecked': false
                }
            ]
        };
    }

    load(item: any): Observable<any> {
        this.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('toggle/' + item.theme)
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
