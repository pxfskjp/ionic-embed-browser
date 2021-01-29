import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { ToastService } from './toast-service';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class AlertService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

    getId = (): string => 'alert';

    getTitle = (): string => 'Alert';

    getAllThemes = (): Array<any> => {
        return [
            { 'url': 'alert/0', 'title': 'Alert Info', 'theme': 'layout1' },
            { 'url': 'alert/1', 'title': 'Alert Warning', 'theme': 'layout2' },
            { 'url': 'alert/2', 'title': 'Alert Subscribe', 'theme': 'layout3' }
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
            'toolbarTitle': 'Alert Info',
            'items': [
                {
                    'id': 1,
                    'image': 'assets/imgs/background/4.jpg',
                    'title': 'Trichocereus lamprochlorus',
                    'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                },
                {
                    'id': 2,
                    'image': 'assets/imgs/background/8.jpg',
                    'title': 'Opuntia phaeacantha leaves',
                    'description': ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
              },
                {
                    'id': 3,
                    'image': 'assets/imgs/background/7.jpg',
                    'title': 'Cactus Spines',
                    'description': 'Many desktop publishing packages and web page editors now use Lorem Ipsum. '
                },
                {
                    'id': 4,
                    'image': 'assets/imgs/background/6.jpg',
                    'title': 'Stetsonia coryne with flower',
                    'description': 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots.'
                },
                {
                    'id': 4,
                    'image': 'assets/imgs/background/5.jpg',
                    'title': 'Cactus',
                    'description': 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.'
                }
            ]
        };
    }

    //* Data Set for page 2
    getDataForLayout2 = (): any => {
        return {
            'toolbarTitle': 'Alert Warning',
            'items': [
                {
                    'id': 1,
                    'category': 'architecture',
                    'image': 'assets/imgs/background/14.jpg',
                    'title': 'First World Hotel',
                    'iconLike': 'heart',
                    'iconComment': 'chatbubbles',
                    'numberLike': '12',
                    'numberCommnet': '4',
                },
                {
                    'id': 2,
                    'category': 'architecture',
                    'image': 'assets/imgs/background/15.jpg',
                    'title': 'The Venetian',
                    'iconLike': 'heart',
                    'iconComment': 'chatbubbles',
                    'numberLike': '12',
                    'numberCommnet': '4',
                },
                {
                    'id': 3,
                    'category': 'architecture',
                    'image': 'assets/imgs/background/23.jpg',
                    'title': 'MGM Grand Las Vegas',
                    'iconLike': 'heart',
                    'iconComment': 'chatbubbles',
                    'numberLike': '12',
                    'numberCommnet': '4',
                },
                {
                    'id': 4,
                    'category': 'architecture',
                    'image': 'assets/imgs/background/21.jpg',
                    'title': 'Izmailovo Hotel',
                    'iconLike': 'heart',
                    'iconComment': 'chatbubbles',
                    'numberLike': '12',
                    'numberCommnet': '4',
                },
                {
                    'id': 5,
                    'category': 'architecture',
                    'image': 'assets/imgs/background/9.jpg',
                    'title': 'Encore Las Vegas',
                    'iconLike': 'heart',
                    'iconComment': 'chatbubbles',
                    'numberLike': '12',
                    'numberCommnet': '4',
                },
                {
                    'id': 6,
                    'category': 'architecture',
                    'image': 'assets/imgs/background/13.jpg',
                    'title': 'Flamingo Las Vegas',
                    'iconLike': 'heart',
                    'iconComment': 'chatbubbles',
                    'numberLike': '12',
                    'numberCommnet': '4',
                }
            ]
        };
    }

    //* Data Set for page 3
    getDataForLayout3 = (): any => {
        return {
            'toolbarTitle': 'Alert Subscribe',
            'items': [
                {
                    'id': 1,
                    'image': 'assets/imgs/background/17.jpg',
                    'time': 'MARCH 14, 2017',
                    'title': 'Swivel chair',
                    'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.',
                    'iconLike': 'heart',
                    'iconComment': 'chatbubbles',
                    'numberLike': '12',
                    'numberCommnet': '4',
                },
                {
                    'id': 2,
                    'image': 'assets/imgs/background/20.jpg',
                    'time': 'MARCH 14, 2017',
                    'title': 'Table top',
                    'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.',
                    'iconLike': 'heart',
                    'iconComment': 'chatbubbles',
                    'numberLike': '12',
                    'numberCommnet': '4',
                },
                {
                    'id': 3,
                    'image': 'assets/imgs/background/15.jpg',
                    'time': 'MARCH 14, 2017',
                    'title': 'Office desks',
                    'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.',
                    'iconLike': 'heart',
                    'iconComment': 'chatbubbles',
                    'numberLike': '12',
                    'numberCommnet': '4',
                },
                {
                    'id': 4,
                    'image': 'assets/imgs/background/23.jpg',
                    'time': 'MARCH 14, 2017',
                    'title': 'Computer desks',
                    'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.',
                    'iconLike': 'heart',
                    'iconComment': 'chatbubbles',
                    'numberLike': '12',
                    'numberCommnet': '4',
                },
                {
                    'id': 5,
                    'image': 'assets/imgs/background/11.jpg',
                    'time': 'MARCH 14, 2017',
                    'title': 'Work lamps',
                    'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.',
                    'iconLike': 'heart',
                    'iconComment': 'chatbubbles',
                    'numberLike': '12',
                    'numberCommnet': '4',
                },
                {
                    'id': 6,
                    'image': 'assets/imgs/background/14.jpg',
                    'time': 'MARCH 14, 2017',
                    'title': 'Bookcases',
                    'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.',
                    'iconLike': 'heart',
                    'iconComment': 'chatbubbles',
                    'numberLike': '12',
                    'numberCommnet': '4',
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
                    .object('alert/' + item.theme)
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
