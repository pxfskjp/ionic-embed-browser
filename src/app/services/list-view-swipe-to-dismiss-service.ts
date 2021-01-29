import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class ListViewSwipeToDismissService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

    getId = (): string => 'swipeToDismiss';

    getTitle = (): string => 'Swipe to dismiss';

    getAllThemes = (): Array<any> => {
        return [
            { 'url': 'swipe-to-dismiss/0', 'title': 'Small item + header', 'theme': 'layout1' },
            { 'url': 'swipe-to-dismiss/1', 'title': 'Products + CTA', 'theme': 'layout2' },
            { 'url': 'swipe-to-dismiss/2', 'title': 'Full with image + left swipe', 'theme': 'layout3' }
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
            'headerTitle': 'Small item + header',
            'title': 'HeaderTitle',
            'description': 'HeaderSubtitle',
            'shortDescription': '35:72',
            'iconLike': 'icon-thumb-up',
            'iconFavorite': 'icon-heart',
            'iconShare': 'icon-share-variant',
            'iconPlay': 'icon-play-circle-outline',
            'items': [
                {
                    'id': 1,
                    'title': 'Song Of Souls',
                    'description': 'Shawna Norman',
                    'shortDescription': '3:42',
                    'image': 'assets/imgs/avatar/0.jpg',
                    'iconDelate': 'icon-delete',
                    'iconUndo': 'icon-undo-variant'
                },
                {
                    'id': 2,
                    'title': 'Tune Of My Obsessions',
                    'description': 'Janice Wilder',
                    'shortDescription': '3:42',
                    'image': 'assets/imgs/avatar/1.jpg',
                    'iconDelate': 'icon-delete',
                    'iconUndo': 'icon-undo-variant'
                },
                {
                    'id': 3,
                    'title': 'Reject Her Tomorrow',
                    'description': 'Lucy Bender',
                    'shortDescription': '3:42',
                    'image': 'assets/imgs/avatar/2.jpg',
                    'iconDelate': 'icon-delete',
                    'iconUndo': 'icon-undo-variant'
                },
                {
                    'id': 4,
                    'title': 'Troubles Of My Blues',
                    'description': 'ouglas Burks',
                    'shortDescription': '3:42',
                    'image': 'assets/imgs/avatar/3.jpg',
                    'iconDelate': 'icon-delete',
                    'iconUndo': 'icon-undo-variant'
                },
                {
                    'id': 5,
                    'title': 'Broken Tonight',
                    'description': 'Sophia Cochran',
                    'shortDescription': '3:42',
                    'image': 'assets/imgs/avatar/4.jpg',
                    'iconDelate': 'icon-delete',
                    'iconUndo': 'icon-undo-variant'
                },
                {
                    'id': 6,
                    'title': 'Sure Choices',
                    'description': 'Lara Lynn',
                    'shortDescription': '3:42',
                    'image': 'assets/imgs/avatar/5.jpg',
                    'iconDelate': 'icon-delete',
                    'iconUndo': 'icon-undo-variant'
                },
                {
                    'id': 7,
                    'title': 'A Storm Is Coming',
                    'description': 'Juliette Medina',
                    'shortDescription': '3:42',
                    'image': 'assets/imgs/avatar/6.jpg',
                    'iconDelate': 'icon-delete',
                    'iconUndo': 'icon-undo-variant'
                },
                {
                    'id': 8,
                    'title': 'He Heard He\'s Crazy',
                    'description': 'Vanessa Ryan',
                    'shortDescription': '3:42',
                    'image': 'assets/imgs/avatar/7.jpg',
                    'iconDelate': 'icon-delete',
                    'iconUndo': 'icon-undo-variant'
                }
            ]
        };
    }


    //* Data Set for page 2
    getDataForLayout2 = (): any => {
        return {
            'headerTitle': 'Products + CTA',
            'items': [
                {
                    'id': 1,
                    'title': 'Black Shirt',
                    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    'image': 'assets/imgs/avatar/17.jpg',
                    'oldPrice': '$42.99',
                    'newPrice': '$35.99',
                    'iconDelate': 'icon-delete',
                    'iconUndo': 'icon-undo-variant'
                },
                {
                    'id': 2,
                    'title': 'Black Sweater',
                    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    'image': 'assets/imgs/avatar/18.jpg',
                    'oldPrice': '$42.99',
                    'newPrice': '$35.99',
                    'iconDelate': 'icon-delete',
                    'iconUndo': 'icon-undo-variant'
                },
                {
                    'id': 3,
                    'title': 'Shirt',
                    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    'image': 'assets/imgs/avatar/19.jpg',
                    'oldPrice': '$42.99',
                    'newPrice': '$35.99',
                    'iconDelate': 'icon-delete',
                    'iconUndo': 'icon-undo-variant'
                },
                {
                    'id': 4,
                    'title': 'White Shirt',
                    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    'image': 'assets/imgs/avatar/20.jpg',
                    'oldPrice': '$42.99',
                    'newPrice': '$35.99',
                    'iconDelate': 'icon-delete',
                    'iconUndo': 'icon-undo-variant'
                },
                {
                    'id': 5,
                    'title': 'White T shirt',
                    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    'image': 'assets/imgs/avatar/21.jpg',
                    'oldPrice': '$42.99',
                    'newPrice': '$35.99',
                    'iconDelate': 'icon-delete',
                    'iconUndo': 'icon-undo-variant'
                },
                {
                    'id': 6,
                    'title': 'T shirt',
                    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    'image': 'assets/imgs/avatar/22.jpg',
                    'oldPrice': '$42.99',
                    'newPrice': '$35.99',
                    'iconDelate': 'icon-delete',
                    'iconUndo': 'icon-undo-variant'
                },
                {
                    'id': 7,
                    'title': 'Hoodies',
                    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    'image': 'assets/imgs/avatar/23.jpg',
                    'oldPrice': '$42.99',
                    'newPrice': '$35.99',
                    'iconDelate': 'icon-delete',
                    'iconUndo': 'icon-undo-variant'
                },
                {
                    'id': 8,
                    'title': 'Sweater',
                    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    'image': 'assets/imgs/avatar/17.jpg',
                    'oldPrice': '$42.99',
                    'newPrice': '$35.99',
                    'iconDelate': 'icon-delete',
                    'iconUndo': 'icon-undo-variant'
                },
                {
                    'id': 9,
                    'title': 'White Sweater',
                    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    'image': 'assets/imgs/avatar/18.jpg',
                    'oldPrice': '$42.99',
                    'newPrice': '$35.99',
                    'iconDelate': 'icon-delete',
                    'iconUndo': 'icon-undo-variant'
                }
            ]
        };
    }

    //* Data Set for page 3
    getDataForLayout3 = (): any => {
        return {
            'headerTitle': 'Full with image + left swipe',
            'items': [
                {
                    'id': 1,
                    'title': 'Weedville',
                    'description': 'Northern Mariana Islands',
                    'image': 'assets/imgs/background/30.jpg',
                    'iconDelate': 'icon-delete',
                    'iconUndo': 'icon-undo-variant'
                },
                {
                    'id': 2,
                    'title': 'Curtice',
                    'description': 'Nauru',
                    'image': 'assets/imgs/background/9.jpg',
                    'iconDelate': 'icon-delete',
                    'iconUndo': 'icon-undo-variant'
                },
                {
                    'id': 3,
                    'title': 'Norvelt',
                    'description': 'Indonesia',
                    'image': 'assets/imgs/background/10.jpg',
                    'iconDelate': 'icon-delete',
                    'iconUndo': 'icon-undo-variant'
                },
                {
                    'id': 4,
                    'title': 'Vincent',
                    'description': 'Antarctica',
                    'image': 'assets/imgs/background/11.jpg',
                    'iconDelate': 'icon-delete',
                    'iconUndo': 'icon-undo-variant'
                },
                {
                    'id': 5,
                    'title': 'Fairacres',
                    'description': 'Colombia',
                    'image': 'assets/imgs/background/12.jpg',
                    'iconDelate': 'icon-delete',
                    'iconUndo': 'icon-undo-variant'
                },
                {
                    'id': 6,
                    'title': 'Greenwich',
                    'description': 'Tajikistan',
                    'image': 'assets/imgs/background/13.jpg',
                    'iconDelate': 'icon-delete',
                    'iconUndo': 'icon-undo-variant'
                },
                {
                    'id': 7,
                    'title': 'Ryderwood',
                    'description': 'Sao Tome and Principe',
                    'image': 'assets/imgs/background/9.jpg',
                    'iconDelate': 'icon-delete',
                    'iconUndo': 'icon-undo-variant'
                },
                {
                    'id': 8,
                    'title': 'Lithium',
                    'description': 'Puerto Rico',
                    'image': 'assets/imgs/background/15.jpg',
                    'iconDelate': 'icon-delete',
                    'iconUndo': 'icon-undo-variant'
                }
            ]
        };
    }

    load(item: any): Observable<any> {
        const that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('listView/swipeToDismiss/' + item.theme)
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
