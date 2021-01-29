import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { ToastService } from './toast-service';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class ListViewExpandableService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

    getId = (): string => 'expandable';

    getTitle = (): string => 'Expandable';

    getAllThemes = (): Array<any> => {
        return [
            { 'url': 'expandable/0', 'title': 'List big image', 'theme': 'layout1' },
            { 'url': 'expandable/1', 'title': 'Full image with CTA', 'theme': 'layout2' },
            { 'url': 'expandable/2', 'title': 'Centered with header', 'theme': 'layout3' }
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
            'toolbarTitle': 'List Big Image',
            'items': [
                {
                    'id': 1,
                    'title': 'Benton Willis',
                    'description': 'SINGER',
                    'image': 'assets/imgs/avatar/15.jpg',
                    'iconLike': 'icon-thumb-up',
                    'iconFavorite': 'icon-heart',
                    'iconShare': 'icon-share-variant',
                    'items': [
                        {
                            'id': 1,
                            'title': 'Smokestack Lightning',
                            'description': 'Universal, 2016',
                            'image': 'assets/imgs/avatar/10.jpg',
                            'iconPlay': 'icon-play-circle'
                        },
                        {
                            'id': 2,
                            'title': 'Boogie Chillen',
                            'description': 'Universal, 2016',
                            'image': 'assets/imgs/avatar/11.jpg',
                            'iconPlay': 'icon-play-circle'
                        },
                        {
                            'id': 3,
                            'title': 'Call It Stormy Mondaye',
                            'description': 'Universal, 2016',
                            'image': 'assets/imgs/avatar/12.jpg',
                            'iconPlay': 'icon-play-circle'
                        }
                    ]
                },
                {
                    'id': 2,
                    'title': 'Jessica Miles',
                    'description': 'BASSO',
                    'image': 'assets/imgs/avatar/2.jpg',
                    'iconLike': 'icon-thumb-up',
                    'iconFavorite': 'icon-heart',
                    'iconShare': 'icon-share-variant',
                    'items': [
                        {
                            'id': 1,
                            'title': 'Bell Bottom Blue',
                            'description': 'Universal, 2016',
                            'image': 'assets/imgs/avatar/14.jpg',
                            'iconPlay': 'icon-play-circle'
                        },
                        {
                            'id': 2,
                            'title': 'Still Got The Blues',
                            'description': 'Universal, 2016',
                            'image': 'assets/imgs/avatar/15.jpg',
                            'iconPlay': 'icon-play-circle'
                        },
                        {
                            'id': 3,
                            'title': 'Mustang Sally',
                            'description': 'Universal, 2016',
                            'image': 'assets/imgs/avatar/14.jpg',
                            'iconPlay': 'icon-play-circle'
                        },
                        {
                            'id': 4,
                            'title': 'Ball N’ Chain',
                            'description': 'Universal, 2016',
                            'image': 'assets/imgs/avatar/13.jpg',
                            'iconPlay': 'icon-play-circle'
                        },
                        {
                            'id': 5,
                            'title': 'Sweet Home Chicago',
                            'description': 'Universal, 2016',
                            'image': 'assets/imgs/avatar/12.jpg',
                            'iconPlay': 'icon-play-circle'
                        },
                        {
                            'id': 6,
                            'title': 'Born Under A Bad Sign',
                            'description': 'Universal, 2016',
                            'image': 'assets/imgs/avatar/11.jpg',
                            'iconPlay': 'icon-play-circle'
                        }
                    ]
                },
                {
                    'id': 3,
                    'title': 'Holman Valencia',
                    'description': 'GUITARIST',
                    'image': 'assets/imgs/avatar/3.jpg',
                    'iconLike': 'icon-thumb-up',
                    'iconFavorite': 'icon-heart',
                    'iconShare': 'icon-share-variant',
                    'items': [
                        {
                            'id': 1,
                            'title': 'Dust My Broom',
                            'description': 'Universal, 2016',
                            'image': 'assets/imgs/avatar/11.jpg',
                            'iconPlay': 'icon-play-circle'
                        },
                        {
                            'id': 2,
                            'title': 'Hold On, I’m Coming',
                            'description': 'Universal, 2016',
                            'image': 'assets/imgs/avatar/12.jpg',
                            'iconPlay': 'icon-play-circle'
                        },
                        {
                            'id': 3,
                            'title': 'The Little Red Rooster',
                            'description': 'Universal, 2016',
                            'image': 'assets/imgs/avatar/13.jpg',
                            'iconPlay': 'icon-play-circle'
                        },
                        {
                            'id': 4,
                            'title': 'Bright Lights',
                            'description': 'Universal, 2016',
                            'image': 'assets/imgs/avatar/14.jpg',
                            'iconPlay': 'icon-play-circle'
                        },
                        {
                            'id': 5,
                            'title': 'Down In The Hole',
                            'description': 'Universal, 2016',
                            'image': 'assets/imgs/avatar/15.jpg',
                            'iconPlay': 'icon-play-circle'
                        }
                    ]
                },
                {
                    'id': 4,
                    'title': 'Natasha Gambl',
                    'description': 'SINGER',
                    'image': 'assets/imgs/avatar/4.jpg',
                    'iconLike': 'icon-thumb-up',
                    'iconFavorite': 'icon-heart',
                    'iconShare': 'icon-share-variant',
                    'items': [
                        {
                            'id': 1,
                            'title': 'Got My Mojo Working',
                            'description': 'Universal, 2016',
                            'image': 'assets/imgs/avatar/0.jpg',
                            'iconPlay': 'icon-play-circle'
                        },
                        {
                            'id': 2,
                            'title': 'A Little Less Conversation',
                            'description': 'Universal, 2016',
                            'image': 'assets/imgs/avatar/1.jpg',
                            'iconPlay': 'icon-play-circle'
                        },
                        {
                            'id': 3,
                            'title': 'Life By The Drop',
                            'description': 'Universal, 2016',
                            'image': 'assets/imgs/avatar/2.jpg',
                            'iconPlay': 'icon-play-circle'
                        },
                        {
                            'id': 4,
                            'title': 'Boom Boom',
                            'description': 'Universal, 2016',
                            'image': 'assets/imgs/avatar/3.jpg',
                            'iconPlay': 'icon-play-circle'
                        }
                    ]
                },
                {
                    'id': 5,
                    'title': 'Carol Kelly',
                    'description': 'DRUMMER',
                    'image': 'assets/imgs/avatar/5.jpg',
                    'iconLike': 'icon-thumb-up',
                    'iconFavorite': 'icon-heart',
                    'iconShare': 'icon-share-variant',
                    'items': [
                        {
                            'id': 1,
                            'title': 'Thing Called Love',
                            'description': 'Universal, 2016',
                            'image': 'assets/imgs/avatar/14.jpg',
                            'iconPlay': 'icon-play-circle'
                        },
                        {
                            'id': 2,
                            'title': 'Green Onions',
                            'description': 'Universal, 2016',
                            'image': 'assets/imgs/avatar/15.jpg',
                            'iconPlay': 'icon-play-circle'
                        },
                        {
                            'id': 3,
                            'title': 'The Midnight Special',
                            'description': 'Universal, 2016',
                            'image': 'assets/imgs/avatar/6.jpg',
                            'iconPlay': 'icon-play-circle'
                        },
                        {
                            'id': 4,
                            'title': 'Mess Around',
                            'description': 'Universal, 2016',
                            'image': 'assets/imgs/avatar/7.jpg',
                            'iconPlay': 'icon-play-circle'
                        }
                    ]
                },
                {
                    'id': 6,
                    'title': 'Mildred Clark',
                    'description': 'DRUMMER',
                    'image': 'assets/imgs/avatar/3.jpg',
                    'iconLike': 'icon-thumb-up',
                    'iconFavorite': 'icon-heart',
                    'iconShare': 'icon-share-variant',
                    'items': [
                        {
                            'id': 1,
                            'title': 'Little Wing',
                            'description': 'Universal, 2016',
                            'image': 'assets/imgs/avatar/14.jpg',
                            'iconPlay': 'icon-play-circle'
                        },
                        {
                            'id': 2,
                            'title': 'Bad Penny',
                            'description': 'Universal, 2016',
                            'image': 'assets/imgs/avatar/15.jpg',
                            'iconPlay': 'icon-play-circle'
                        },
                        {
                            'id': 3,
                            'title': 'Farther on Up the Road',
                            'description': 'Universal, 2016',
                            'image': 'assets/imgs/avatar/6.jpg',
                            'iconPlay': 'icon-play-circle'
                        },
                        {
                            'id': 4,
                            'title': 'Mannish Boy',
                            'description': 'Universal, 2016',
                            'image': 'assets/imgs/avatar/7.jpg',
                            'iconPlay': 'icon-play-circle'
                        }
                    ]
                },
                {
                    'id': 7,
                    'title': 'Megan Singleton',
                    'description': 'DRUMMER',
                    'image': 'assets/imgs/avatar/4.jpg',
                    'iconLike': 'icon-thumb-up',
                    'iconFavorite': 'icon-heart',
                    'iconShare': 'icon-share-variant',
                    'items': [
                        {
                            'id': 1,
                            'title': 'Trouble No More',
                            'description': 'Universal, 2016',
                            'image': 'assets/imgs/avatar/14.jpg',
                            'iconPlay': 'icon-play-circle'
                        },
                        {
                            'id': 2,
                            'title': 'Hellhound On My Trail',
                            'description': 'Universal, 2016',
                            'image': 'assets/imgs/avatar/15.jpg',
                            'iconPlay': 'icon-play-circle'
                        },
                        {
                            'id': 3,
                            'title': 'Help Me',
                            'description': 'Universal, 2016',
                            'image': 'assets/imgs/avatar/6.jpg',
                            'iconPlay': 'icon-play-circle'
                        },
                        {
                            'id': 4,
                            'title': 'A Man Of Many Words',
                            'description': 'Universal, 2016',
                            'image': 'assets/imgs/avatar/7.jpg',
                            'iconPlay': 'icon-play-circle'
                        }
                    ]
                }
            ]
        };
    }

    //* Data Set for page 2
    getDataForLayout2 = (): any => {
        return {
            'toolbarTitle': 'Full Image With Cta',
            'items': [
                {
                    'id': 1,
                    'title': 'Rubus idaeus Pi',
                    'backgroundImage': 'assets/imgs/background/22.jpg',
                    'button': 'BUY',
                    'items': [
                        'PAY WITH PAYPAL',
                        'PAY WITH VISA CARD',
                        'PAY WITH MAESTRO CARD'
                    ]
                },
                {
                    'id': 2,
                    'title': 'Nidum Thermostat',
                    'backgroundImage': 'assets/imgs/background/23.jpg',
                    'button': 'BUY',
                    'items': [
                        'PAY WITH PAYPAL',
                        'PAY WITH VISA CARD',
                        'PAY WITH MAESTRO CARD'
                    ]
                },
                {
                    'id': 3,
                    'title': 'Baculum Magicum',
                    'backgroundImage': 'assets/imgs/background/24.jpg',
                    'button': 'BUY',
                    'items': [
                        'PAY WITH PAYPAL',
                        'PAY WITH VISA CARD',
                        'PAY WITH MAESTRO CARD'
                    ]
                },
                {
                    'id': 4,
                    'title': 'Palm Nauclerus',
                    'backgroundImage': 'assets/imgs/background/25.jpg',
                    'button': 'BUY',
                    'items': [
                        'PAY WITH PAYPAL',
                        'PAY WITH VISA CARD',
                        'PAY WITH MAESTRO CARD'
                    ]
                },
                {
                    'id': 5,
                    'title': 'Commodore LXIV',
                    'backgroundImage': 'assets/imgs/background/26.jpg',
                    'button': 'BUY',
                    'items': [
                        'PAY WITH PAYPAL',
                        'PAY WITH VISA CARD',
                        'PAY WITH MAESTRO CARD'
                    ]
                },
                {
                    'id': 6,
                    'title': 'Optio Fridericus Hultsch Box',
                    'backgroundImage': 'assets/imgs/background/27.jpg',
                    'button': 'BUY',
                    'items': [
                        'PAY WITH PAYPAL',
                        'PAY WITH VISA CARD',
                        'PAY WITH MAESTRO CARD'
                    ]
                },
                {
                    'id': 7,
                    'title': 'Oculi Odium',
                    'backgroundImage': 'assets/imgs/background/28.jpg',
                    'button': 'BUY',
                    'items': [
                        'PAY WITH PAYPAL',
                        'PAY WITH VISA CARD',
                        'PAY WITH MAESTRO CARD'
                    ]
                }
            ]
        };
    }

    //* Data Set for page 3
    getDataForLayout3 = (): any => {
        return {
            'toolbarTitle': 'Centered With Header',
            'title': 'New York',
            'headerImage': 'assets/imgs/background/10.jpg',
            'items': [
                {
                    'title': 'Where to go',
                    'icon': 'icon-map-marker-radius',
                    'items': [
                        'Monuments',
                        'Sightseeing',
                        'Historical',
                        'Sport'
                    ]
                },
                {
                    'title': 'Where to sleep',
                    'icon': 'icon-hotel',
                    'items': [
                        'Hotels',
                        'Hostels',
                        'Motels',
                        'Rooms'
                    ]
                },
                {
                    'title': 'Where to eat',
                    'icon': 'icon-silverware-variant',
                    'items': [
                        'Fast Food',
                        'Restorants',
                        'Pubs',
                        'Hotels'
                    ]
                },
                {
                    'title': 'Where to drink',
                    'icon': 'icon-martini',
                    'items': [
                        'Caffes',
                        'Bars',
                        'Pubs',
                        'Clubs'
                    ]
                },
                {
                    'title': 'Where to go',
                    'icon': 'icon-map-marker-radius',
                    'items': [
                        'Monuments',
                        'Sightseeing',
                        'Historical',
                        'Sport'
                    ]
                }
            ]
        };
    }

    load(item: any): Observable<any> {
        this.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('listView/expandable/' + item.theme)
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
