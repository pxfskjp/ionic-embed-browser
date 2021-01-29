import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class SearchBarService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

    getTitle = (): string => 'Search bars';

    getAllThemes = (): Array<any> => {
        return [
            { 'url': 'search-bars/0', 'title': 'Simple', 'theme': 'layout1' },
            { 'url': 'search-bars/1', 'title': 'Field + header', 'theme': 'layout2' },
            { 'url': 'search-bars/2', 'title': 'Field + header 2', 'theme': 'layout3' }
        ];
    }

    getDataForTheme = (menuItem: any): Array<any> => {
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
            'toolBarTitle': 'Simple',
            'items': [
                {
                    'title': 'Friends',
                    'description': '254 people',
                    'icon': 'icon-account-check'
                },
                {
                    'title': 'Enemies',
                    'description': '254 people',
                    'icon': 'icon-account-check'
                },
                {
                    'title': 'Neutral',
                    'description': '254 people',
                    'icon': 'icon-account-check'
                },
                {
                    'title': 'Family',
                    'description': '254 people',
                    'icon': 'icon-account-check'
                },
                {
                    'title': 'Guests',
                    'description': '254 people',
                    'icon': 'icon-account-check'
                },
                {
                    'title': 'Students',
                    'description': '254 people',
                    'icon': 'icon-account-check'
                },
                {
                    'title': 'Friends',
                    'description': '254 people',
                    'icon': 'icon-account-check'
                },
                {
                    'title': 'Enemies',
                    'description': '254 people',
                    'icon': 'icon-account-check'
                },
                {
                    'title': 'Neutral',
                    'description': '254 people',
                    'icon': 'icon-account-check'
                },
                {
                    'title': 'Family',
                    'description': '254 people',
                    'icon': 'icon-account-check'
                },
                {
                    'title': 'Guests',
                    'description': '254 people',
                    'icon': 'icon-account-check'
                },
                {
                    'title': 'Students',
                    'description': '254 people',
                    'icon': 'icon-account-check'
                }
            ]
        };
    }

    //* Data Set for page 2
    getDataForLayout2 = (): any => {
        return {
            'toolbarTitle': 'Field + header',
            'toolBarTitle': 'Field + header',
            'headerImage': 'assets/imgs/background/30.jpg',
            'searchText': 'Search by',
            'items': [
                {
                    'title': 'Song',
                    'icon': 'icon-music-box'
                },
                {
                    'title': 'Album',
                    'icon': 'icon-headset'
                },
                {
                    'title': 'Artist',
                    'icon': 'icon-human-child'
                },
                {
                    'title': 'Genre',
                    'icon': 'icon-menu'
                },
                {
                    'title': 'Song',
                    'icon': 'icon-music-box'
                },
                {
                    'title': 'Album',
                    'icon': 'icon-headset'
                },
                {
                    'title': 'Artist',
                    'icon': 'icon-human-child'
                },
                {
                    'title': 'Genre',
                    'icon': 'icon-menu'
                },
                {
                    'title': 'Album',
                    'icon': 'icon-headset'
                }
            ]
        };
    }

    //* Data Set for page 3
    getDataForLayout3 = (): any => {
        return {
            'toolbarTitle': 'Field + header 2',
            'headerImage': 'assets/imgs/background/9.jpg',
            'items': [
                {
                    'id': 1,
                    'title': 'Monument walk tour',
                    'description': '3:30min walking tour',
                    'price': '123$',
                    'icon': 'icon-map-marker-radius'
                },
                {
                    'id': 2,
                    'title': 'River walk tour',
                    'description': '3:30min walking tour',
                    'price': '123$',
                    'icon': 'icon-map-marker-radius'
                },
                {
                    'id': 3,
                    'title': 'City walk tour',
                    'description': '3:30min walking tour',
                    'price': '123$',
                    'icon': 'icon-map-marker-radius'
                },
                {
                    'id': 4,
                    'title': 'Park walk tour',
                    'description': '3:30min walking tour',
                    'price': '123$',
                    'icon': 'icon-map-marker-radius'
                },
                {
                    'id': 5,
                    'title': 'Vilage walk tour',
                    'description': '3:30min walking tour',
                    'price': '123$',
                    'icon': 'icon-map-marker-radius'
                },
                {
                    'id': 6,
                    'title': 'Lake walk tour',
                    'description': '3:30min walking tour',
                    'price': '123$',
                    'icon': 'icon-map-marker-radius'
                },
                {
                    'id': 7,
                    'title': 'Castle walk tour',
                    'description': '3:30min walking tour',
                    'price': '123$',
                    'icon': 'icon-map-marker-radius'
                },
                {
                    'id': 8,
                    'title': 'Beach walk tour',
                    'description': '3:30min walking tour',
                    'price': '123$',
                    'icon': 'icon-map-marker-radius'
                }
            ]
        };
    }

    load(item: any): Observable<any> {
        this.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('searchBars/' + item.theme)
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
