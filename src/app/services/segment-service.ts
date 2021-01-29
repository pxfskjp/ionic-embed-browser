import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class SegmentService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

    getTitle = (): string => 'Segment';

    getAllThemes = (): Array<any> => {
        return [
            { 'url': 'segment/0', 'title': 'Segment List', 'theme': 'layout1' },
            { 'url': 'segment/1', 'title': 'Segment Card', 'theme': 'layout2' },
            { 'url': 'segment/2', 'title': 'Segment Post', 'theme': 'layout3' }
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
            'toolbarTitle': 'Segment List',
            'segmentButton1': 'new product',
            'segmentButton2': 'sale',
            // Data Page 1
            'page1': {
                'background': 'assets/imgs/background/9.jpg',
                'items': [
                    {
                        'id': 1,
                        'image': 'assets/imgs/avatar/17.jpg',
                        'title': 'Black Shirt',
                        'category': 'new product',
                        'price': '$1.99',
                    },
                    {
                        'id': 2,
                        'image': 'assets/imgs/avatar/18.jpg',
                        'title': 'Black Sweater',
                        'category': 'new product',
                        'price': '$3.99',
                    },
                    {
                        'id': 3,
                        'image': 'assets/imgs/avatar/19.jpg',
                        'title': 'Shirt',
                        'category': 'new product',
                        'price': '$3.99',
                    },
                    {
                        'id': 4,
                        'image': 'assets/imgs/avatar/20.jpg',
                        'title': 'White Shirt',
                        'category': 'new product',
                        'comments': '512',
                        'price': '$3.99',
                    },
                    {
                        'id': 5,
                        'image': 'assets/imgs/avatar/21.jpg',
                        'title': 'White T shirt',
                        'category': 'new product',
                        'price': '$3.99',
                    }
                ]
            },
            // Data Page 2
            'page2': {
                'background': 'assets/imgs/background/8.jpg',
                'items': [
                    {
                        'id': 1,
                        'image': 'assets/imgs/avatar/22.jpg',
                        'title': 'T shirt',
                        'category': 'sale',
                        'price': '$1.99',
                    },
                    {
                        'id': 2,
                        'image': 'assets/imgs/avatar/23.jpg',
                        'title': 'Hoodies',
                        'category': 'sale',
                        'price': '$3.99',
                    },
                    {
                        'id': 3,
                        'image': 'assets/imgs/avatar/19.jpg',
                        'title': 'Black Shirt',
                        'category': 'sale',
                        'price': '$3.99',
                    },
                    {
                        'id': 4,
                        'image': 'assets/imgs/avatar/18.jpg',
                        'title': ' White T shirt',
                        'category': 'sale',
                        'comments': '512',
                        'price': '$3.99',
                    },
                    {
                        'id': 5,
                        'image': 'assets/imgs/avatar/17.jpg',
                        'title': 'Shirt',
                        'category': 'sale',
                        'price': '$3.99',
                    }
                ]
            }
        };
    }

    //* Data Set for page 2
    getDataForLayout2 = (): any => {
        return {
            'toolbarTitle': 'Segment Card',
            'segmentButton1': 'new news',
            'segmentButton2': 'old news',
            // Data Page 1
            'page1': {
                'items': [
                    {
                        'id': 1,
                        'image': 'assets/imgs/background/1.jpg',
                        'title': 'Easy Carrot Cake',
                        'category': 'Recipes',
                        'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
                    },
                    {
                        'id': 2,
                        'image': 'assets/imgs/background/2.jpg',
                        'title': 'Lake Ladoga',
                        'category': 'Summer',
                        'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
                    },
                    {
                        'id': 3,
                        'image': 'assets/imgs/background/3.jpg',
                        'title': 'Vasco da Gama Bridge',
                        'category': 'Architecture',
                        'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
                    },
                    {
                        'id': 4,
                        'image': 'assets/imgs/background/4.jpg',
                        'title': 'Cactus Flowers',
                        'category': 'Flowerss',
                        'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
                    },
                    {
                        'id': 5,
                        'image': 'assets/imgs/background/5.jpg',
                        'title': 'Stetsonia coryne with flower',
                        'category': 'Flowerss',
                        'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
                    }
                ]
            },
            // Data Page 2
            'page2': {
                'items': [
                    {
                        'id': 1,
                        'image': 'assets/imgs/background/6.jpg',
                        'title': 'Trichocereus lamprochlorus',
                        'category': 'Flowerss',
                        'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
                    },
                    {
                        'id': 2,
                        'image': 'assets/imgs/background/7.jpg',
                        'title': 'Opuntia phaeacantha leaves',
                        'category': 'Flowerss',
                        'description': 'ALorem Ipsum is simply dummy text of the printing and typesetting industry...',
                    },
                    {
                        'id': 3,
                        'image': 'assets/imgs/background/8.jpg',
                        'title': 'Cactus Spines',
                        'category': 'Flowerss',
                        'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
                    },
                    {
                        'id': 4,
                        'image': 'assets/imgs/background/2.jpg',
                        'title': 'Lake Ladoga',
                        'category': 'Summer',
                        'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
                    },
                    {
                        'id': 5,
                        'image': 'assets/imgs/background/1.jpg',
                        'title': 'Carrot Cake',
                        'category': 'Recipes',
                        'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
                    }
                ]
            }
        };
    }

    //* Data Set for page 3
    getDataForLayout3 = (): any => {
        return {
            'toolbarTitle': 'Segment Post',
            'segmentButton1': 'new offer',
            'segmentButton2': 'best offer',
            // Data Page 1
            'page1': {
                'items': [
                    {
                        'id': 1,
                        'image': 'assets/imgs/background/1.jpg',
                        'time': '25 January 2018',
                        'title': 'Easy Carrot Cake',
                        'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                        'like': {
                            'icon': 'heart',
                            'number': '12',
                            'isActive': false
                        },
                        'comment': {
                            'icon': 'chatbubbles',
                            'number': '4',
                            'isActive': false
                        }
                    },
                    {
                        'id': 2,
                        'image': 'assets/imgs/background/2.jpg',
                        'time': '03 May 2018',
                        'title': 'Lake Ladoga',
                        'description': 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ',
                        'like': {
                            'icon': 'heart',
                            'number': '12',
                            'isActive': false
                        },
                        'comment': {
                            'icon': 'chatbubbles',
                            'number': '4',
                            'isActive': false
                        }
                    },
                    {
                        'id': 3,
                        'image': 'assets/imgs/background/3.jpg',
                        'time': '30 July 2018',
                        'title': 'Vasco da Gama Bridge',
                        'description': 'It is a long established fact that a reader will be distracted by the readable content',
                        'like': {
                            'icon': 'heart',
                            'number': '12',
                            'isActive': false
                        },
                        'comment': {
                            'icon': 'chatbubbles',
                            'number': '4',
                            'isActive': false
                        }
                    },
                    {
                        'id': 4,
                        'image': 'assets/imgs/background/4.jpg',
                        'time': '28 April 2018',
                        'title': 'Cactus Flowers',
                        'description': 'There are many variations of passages of Lorem Ipsum available, but the majority',
                        'like': {
                            'icon': 'heart',
                            'number': '12',
                            'isActive': false
                        },
                        'comment': {
                            'icon': 'chatbubbles',
                            'number': '4',
                            'isActive': false
                        }
                    },
                    {
                        'id': 5,
                        'image': 'assets/imgs/background/5.jpg',
                        'time': '15 November 2017',
                        'title': 'Stetsonia coryne with flower',
                        'description': 'If you are going to use a passage of Lorem Ipsum, you need to be sure there',
                        'like': {
                            'icon': 'heart',
                            'number': '12',
                            'isActive': false
                        },
                        'comment': {
                            'icon': 'chatbubbles',
                            'number': '4',
                            'isActive': false
                        }
                    }
                ]
            },
            // Data Page 2
            'page2': {
                'items': [
                    {
                        'id': 1,
                        'image': 'assets/imgs/background/6.jpg',
                        'time': '09 May 2018',
                        'title': 'Trichocereus lamprochlorus',
                        'description': 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots',
                        'like': {
                            'icon': 'heart',
                            'number': '12',
                            'isActive': false
                        },
                        'comment': {
                            'icon': 'chatbubbles',
                            'number': '4',
                            'isActive': false
                        }
                    },
                    {
                        'id': 2,
                        'image': 'assets/imgs/background/7.jpg',
                        'time': '08 July 2018',
                        'title': 'Opuntia phaeacantha leaves',
                        'description': 'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia',
                        'like': {
                            'icon': 'heart',
                            'number': '12',
                            'isActive': false
                        },
                        'comment': {
                            'icon': 'chatbubbles',
                            'number': '4',
                            'isActive': false
                        }
                    },
                    {
                        'id': 3,
                        'image': 'assets/imgs/background/8.jpg',
                        'time': '11 September 2018',
                        'title': 'Cactus Spines',
                        'description': 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below',
                        'like': {
                            'icon': 'heart',
                            'number': '12',
                            'isActive': false
                        },
                        'comment': {
                            'icon': 'chatbubbles',
                            'number': '4',
                            'isActive': false
                        }
                    },
                    {
                        'id': 4,
                        'image': 'assets/imgs/background/2.jpg',
                        'time': '23 July 2018',
                        'title': 'Lake Ladoga',
                        'description': 'Lorem Ipsum is therefore always free from repetition, injected humour.',
                        'like': {
                            'icon': 'heart',
                            'number': '12',
                            'isActive': false
                        },
                        'comment': {
                            'icon': 'chatbubbles',
                            'number': '4',
                            'isActive': false
                        }
                    },
                    {
                        'id': 5,
                        'image': 'assets/imgs/background/1.jpg',
                        'time': '05 June 2018',
                        'title': 'Carrot Cake',
                        'description': 'Lorem Ipsum as their default model text, and a search for \'lorem ipsum',
                        'like': {
                            'icon': 'heart',
                            'number': '12',
                            'isActive': false
                        },
                        'comment': {
                            'icon': 'chatbubbles',
                            'number': '4',
                            'isActive': false
                        }
                    }
                ]
            }
        };
    }

    load(item: any): Observable<any> {
        this.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('segment/' + item.theme)
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
