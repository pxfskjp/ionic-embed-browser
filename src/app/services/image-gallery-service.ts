import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class ImageGalleryService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

    getTitle = (): string => 'Image Gallery';

    getAllThemes = (): Array<any> => {
        return [
            { 'url': 'image-gallery/0', 'title': 'Gallery 1', 'theme': 'layout1' },
            { 'url': 'image-gallery/1', 'title': 'Category 2 (Music)', 'theme': 'layout2' },
            { 'url': 'image-gallery/2', 'title': 'Subcategory 1 (Dogs)', 'theme': 'layout3' }
        ];
    }

    getDataForTheme = (menuItem: any): Array<any> => {
        return this[
            'getDataFor' +
            menuItem.theme.charAt(0).toUpperCase() +
            menuItem.theme.slice(1)
        ]();
    }

    // Set Data For Gallery - CATEGORY 1 (ANIMALS)
    getDataForLayout1 = (): any => {
        return {
            'toolbarTitle': 'Gallery 1',
            'items': [
                {
                    'id': 1,
                    'title': 'Guitars',
                    'image': 'assets/imgs/gallery/full-gallery-content-1/0.jpg',
                    'favorite': true,
                    'items': [
                        {
                            'id': 1,
                            'title': 'Dog 1',
                            'image': 'assets/imgs/gallery/full-gallery-content-1/1.jpg'
                        },
                        {
                            'id': 2,
                            'title': 'Dog 2',
                            'image': 'assets/imgs/gallery/full-gallery-content-1/2.jpg'
                        },
                        {
                            'id': 3,
                            'title': 'Dog 3',
                            'image': 'assets/imgs/gallery/full-gallery-content-1/3.jpg'
                        },
                        {
                            'id': 4,
                            'title': 'Dog 4',
                            'image': 'assets/imgs/gallery/full-gallery-content-1/4.jpg'
                        },
                        {
                            'id': 5,
                            'title': 'Dog 5',
                            'image': 'assets/imgs/gallery/full-gallery-content-1/5.jpg'
                        },
                        {
                            'id': 6,
                            'title': 'Dog 6',
                            'image': 'assets/imgs/gallery/full-gallery-content-1/6.jpg'
                        },
                        {
                            'id': 7,
                            'title': 'Dog 7',
                            'image': 'assets/imgs/gallery/full-gallery-content-1/7.jpg'
                        },
                        {
                            'id': 8,
                            'title': 'Dog 8',
                            'image': 'assets/imgs/gallery/full-gallery-content-1/8.jpg'
                        }
                    ]
                },
                {
                    'id': 2,
                    'title': 'Bridge',
                    'image': 'assets/imgs/gallery/full-gallery-content-2/0.jpg',
                    'favorite': false,
                    'items': [
                        {
                            'id': 1,
                            'title': 'Horses 1',
                            'image': 'assets/imgs/gallery/full-gallery-content-2/1.jpg'
                        },
                        {
                            'id': 2,
                            'title': 'Horses 2',
                            'image': 'assets/imgs/gallery/full-gallery-content-2/2.jpg'
                        },
                        {
                            'id': 3,
                            'title': 'Horses 3',
                            'image': 'assets/imgs/gallery/full-gallery-content-2/3.jpg'
                        },
                        {
                            'id': 4,
                            'title': 'Horses 4',
                            'image': 'assets/imgs/gallery/full-gallery-content-2/4.jpg'
                        },
                        {
                            'id': 5,
                            'title': 'Horses 5',
                            'image': 'assets/imgs/gallery/full-gallery-content-2/5.jpg'
                        },
                        {
                            'id': 6,
                            'title': 'Horses 6',
                            'image': 'assets/imgs/gallery/full-gallery-content-2/6.jpg'
                        },
                        {
                            'id': 7,
                            'title': 'Horses 7',
                            'image': 'assets/imgs/gallery/full-gallery-content-2/7.jpg'
                        },
                        {
                            'id': 8,
                            'title': 'Horses 8',
                            'image': 'assets/imgs/gallery/full-gallery-content-2/8.jpg'
                        }
                    ]
                },
                {
                    'id': 3,
                    'title': 'Camera',
                    'image': 'assets/imgs/gallery/full-gallery-content-3/0.jpg',
                    'favorite': false,
                    'items': [
                        {
                            'id': 1,
                            'title': 'Cats 1',
                            'image': 'assets/imgs/gallery/full-gallery-content-3/1.jpg'
                        },
                        {
                            'id': 2,
                            'title': 'Cats 2',
                            'image': 'assets/imgs/gallery/full-gallery-content-3/2.jpg'
                        },
                        {
                            'id': 3,
                            'title': 'Cats 3',
                            'image': 'assets/imgs/gallery/full-gallery-content-3/3.jpg'
                        },
                        {
                            'id': 4,
                            'title': 'Cats 4',
                            'image': 'assets/imgs/gallery/full-gallery-content-3/4.jpg'
                        },
                        {
                            'id': 5,
                            'title': 'Cats 4',
                            'image': 'assets/imgs/gallery/full-gallery-content-3/5.jpg'
                        },
                        {
                            'id': 6,
                            'title': 'Cats 5',
                            'image': 'assets/imgs/gallery/full-gallery-content-3/6.jpg'
                        },
                        {
                            'id': 7,
                            'title': 'Cats 6',
                            'image': 'assets/imgs/gallery/full-gallery-content-3/7.jpg'
                        },
                        {
                            'id': 8,
                            'title': 'Cats 7',
                            'image': 'assets/imgs/gallery/full-gallery-content-3/8.jpg'
                        },
                        {
                            'id': 9,
                            'title': 'Cats 8',
                            'image': 'assets/imgs/gallery/full-gallery-content-3/9.jpg'
                        }
                    ]
                },
                {
                    'id': 4,
                    'title': 'Classical Guitar',
                    'image': 'assets/imgs/gallery/full-gallery-content-4/0.jpg',
                    'favorite': false,
                    'items': [
                        {
                            'id': 1,
                            'title': 'Kangaroo 1',
                            'image': 'assets/imgs/gallery/full-gallery-content-4/1.jpg'
                        },
                        {
                            'id': 2,
                            'title': 'Kangaroo 2',
                            'image': 'assets/imgs/gallery/full-gallery-content-4/2.jpg'
                        },
                        {
                            'id': 3,
                            'title': 'Kangaroo 3',
                            'image': 'assets/imgs/gallery/full-gallery-content-4/3.jpg'
                        },
                        {
                            'id': 4,
                            'title': 'Kangaroo 4',
                            'image': 'assets/imgs/gallery/full-gallery-content-4/4.jpg'
                        },
                        {
                            'id': 5,
                            'title': 'Kangaroo 5',
                            'image': 'assets/imgs/gallery/full-gallery-content-4/5.jpg'
                        },
                        {
                            'id': 6,
                            'title': 'Kangaroo 6',
                            'image': 'assets/imgs/gallery/full-gallery-content-4/6.jpg'
                        },
                        {
                            'id': 7,
                            'title': 'Kangaroo 7',
                            'image': 'assets/imgs/gallery/full-gallery-content-4/7.jpg'
                        },
                        {
                            'id': 8,
                            'title': 'Kangaroo 8',
                            'image': 'assets/imgs/gallery/full-gallery-content-4/8.jpg'
                        }
                    ]
                },
                {
                    'id': 5,
                    'title': 'Concerts',
                    'image': 'assets/imgs/gallery/full-gallery-content-5/0.jpg',
                    'favorite': true,
                    'items': [
                        {
                            'id': 1,
                            'title': 'Concerts 1',
                            'image': 'assets/imgs/gallery/full-gallery-content-5/1.jpg'
                        },
                        {
                            'id': 2,
                            'title': 'Concerts 2',
                            'image': 'assets/imgs/gallery/full-gallery-content-5/2.jpg'
                        },
                        {
                            'id': 3,
                            'title': 'Concerts 3',
                            'image': 'assets/imgs/gallery/full-gallery-content-5/3.jpg'
                        },
                        {
                            'id': 4,
                            'title': 'Concerts 4',
                            'image': 'assets/imgs/gallery/full-gallery-content-5/4.jpg'
                        },
                        {
                            'id': 5,
                            'title': 'Concerts 5',
                            'image': 'assets/imgs/gallery/full-gallery-content-5/5.jpg'
                        },
                        {
                            'id': 6,
                            'title': 'Concerts 6',
                            'image': 'assets/imgs/gallery/full-gallery-content-5/6.jpg'
                        },
                        {
                            'id': 7,
                            'title': 'Concerts 7',
                            'image': 'assets/imgs/gallery/full-gallery-content-5/7.jpg'
                        },
                        {
                            'id': 8,
                            'title': 'Concerts 8',
                            'image': 'assets/imgs/gallery/full-gallery-content-5/8.jpg'
                        }
                    ]
                },
                {
                    'id': 6,
                    'title': 'Reinforcements',
                    'image': 'assets/imgs/gallery/full-gallery-content-6/0.jpg',
                    'favorite': true,
                    'items': [
                        {
                            'id': 1,
                            'title': 'Eagles 1',
                            'image': 'assets/imgs/gallery/full-gallery-content-6/1.jpg'
                        },
                        {
                            'id': 2,
                            'title': 'Eagles 2',
                            'image': 'assets/imgs/gallery/full-gallery-content-6/2.jpg'
                        },
                        {
                            'id': 3,
                            'title': 'Eagles 3',
                            'image': 'assets/imgs/gallery/full-gallery-content-6/3.jpg'
                        },
                        {
                            'id': 4,
                            'title': 'Eagles 4',
                            'image': 'assets/imgs/gallery/full-gallery-content-6/4.jpg'
                        },
                        {
                            'id': 5,
                            'title': 'Eagles 5',
                            'image': 'assets/imgs/gallery/full-gallery-content-6/5.jpg'
                        },
                        {
                            'id': 6,
                            'title': 'Eagles 6',
                            'image': 'assets/imgs/gallery/full-gallery-content-6/6.jpg'
                        },
                        {
                            'id': 7,
                            'title': 'Eagles 7',
                            'image': 'assets/imgs/gallery/full-gallery-content-6/7.jpg'
                        }
                    ]
                }
            ]
        };
    }

    // Set Data For Gallery - SUBCATEGORY 1 (DOGS)
    getDataForLayout2 = (): any => {
        return {
            'toolbarTitle': 'Category 2 (Music)',
            'title': 'SUBCATEGORY 1 (DOG)',
            'items': [
                {
                    'id': 1,
                    'title': 'Dog 1',
                    'image': 'assets/imgs/gallery/thumb-grid/1.jpg',
                    'favorite': true
                },
                {
                    'id': 2,
                    'title': 'Dog 2',
                    'image': 'assets/imgs/gallery/thumb-grid/2.jpg',
                    'favorite': true
                },
                {
                    'id': 3,
                    'title': 'Dog 3',
                    'image': 'assets/imgs/gallery/thumb-grid/3.jpg',
                    'favorite': true
                },
                {
                    'id': 4,
                    'title': 'Dog 4',
                    'image': 'assets/imgs/gallery/thumb-grid/4.jpg',
                    'favorite': true
                },
                {
                    'id': 5,
                    'title': 'Dog 5',
                    'image': 'assets/imgs/gallery/thumb-grid/5.jpg',
                    'favorite': true
                },
                {
                    'id': 6,
                    'title': 'Dog 6',
                    'image': 'assets/imgs/gallery/thumb-grid/6.jpg',
                    'favorite': true
                },
                {
                    'id': 7,
                    'title': 'Dog 7',
                    'image': 'assets/imgs/gallery/thumb-grid/7.jpg',
                    'favorite': true
                },
                {
                    'id': 8,
                    'title': 'Dog 8',
                    'image': 'assets/imgs/gallery/thumb-grid/8.jpg',
                    'favorite': true
                }
            ]
        };
    }

    // Set Data For Gallery - CATEGORY 2 (MUSIC)
    getDataForLayout3 = (): any => {
        return {
            'toolbarTitle': 'CATEGORY 2 (MUSIC)',
            'headerTitle': 'Subcategory 1 (Dogs)',
            'items': [
                {
                    'id': 1,
                    'title': 'Travel',
                    'image': 'assets/imgs/gallery/full-gallery-content-8/0.jpg',
                    'favorite': false,
                    'items': [
                        {
                            'id': 1,
                            'title': 'Travel 1',
                            'image': 'assets/imgs/gallery/full-gallery-content-8/1.jpg'
                        },
                        {
                            'id': 2,
                            'title': 'Travel 2',
                            'image': 'assets/imgs/gallery/full-gallery-content-8/2.jpg'
                        },
                        {
                            'id': 3,
                            'title': 'Travel 3',
                            'image': 'assets/imgs/gallery/full-gallery-content-8/3.jpg'
                        },
                        {
                            'id': 4,
                            'title': 'Travel 4',
                            'image': 'assets/imgs/gallery/full-gallery-content-8/4.jpg'
                        },
                        {
                            'id': 5,
                            'title': 'Travel 5',
                            'image': 'assets/imgs/gallery/full-gallery-content-8/5.jpg'
                        },
                        {
                            'id': 6,
                            'title': 'Travel 6',
                            'image': 'assets/imgs/gallery/full-gallery-content-8/6.jpg'
                        }
                    ]
                },
                {
                    'id': 2,
                    'title': 'Watches',
                    'image': 'assets/imgs/gallery/full-gallery-content-7/0.jpg',
                    'favorite': true,
                    'items': [
                        {
                            'id': 1,
                            'title': 'Watches 1',
                            'image': 'assets/imgs/gallery/full-gallery-content-7/1.jpg'
                        },
                        {
                            'id': 2,
                            'title': 'Watches 2',
                            'image': 'assets/imgs/gallery/full-gallery-content-7/2.jpg'
                        },
                        {
                            'id': 3,
                            'title': 'Watches 3',
                            'image': 'assets/imgs/gallery/full-gallery-content-7/3.jpg'
                        },
                        {
                            'id': 4,
                            'title': 'Watches 4',
                            'image': 'assets/imgs/gallery/full-gallery-content-7/4.jpg'
                        },
                        {
                            'id': 5,
                            'title': 'Watches 5',
                            'image': 'assets/imgs/gallery/full-gallery-content-7/5.jpg'
                        },
                        {
                            'id': 6,
                            'title': 'Watches 6',
                            'image': 'assets/imgs/gallery/full-gallery-content-7/6.jpg'
                        }
                    ]
                },
                {
                    'id': 3,
                    'title': 'Reinforcements',
                    'image': 'assets/imgs/gallery/full-gallery-content-6/0.jpg',
                    'favorite': true,
                    'items': [
                        {
                            'id': 1,
                            'title': 'Reinforcements 1',
                            'image': 'assets/imgs/gallery/full-gallery-content-6/1.jpg'
                        },
                        {
                            'id': 2,
                            'title': 'Reinforcements 2',
                            'image': 'assets/imgs/gallery/full-gallery-content-6/2.jpg'
                        },
                        {
                            'id': 3,
                            'title': 'Reinforcements 3',
                            'image': 'assets/imgs/gallery/full-gallery-content-6/3.jpg'
                        },
                        {
                            'id': 4,
                            'title': 'Reinforcements 4',
                            'image': 'assets/imgs/gallery/full-gallery-content-6/4.jpg'
                        },
                        {
                            'id': 5,
                            'title': 'Reinforcements 5',
                            'image': 'assets/imgs/gallery/full-gallery-content-6/5.jpg'
                        },
                        {
                            'id': 6,
                            'title': 'Reinforcements 6',
                            'image': 'assets/imgs/gallery/full-gallery-content-6/6.jpg'
                        }
                    ]
                },
                {
                    'id': 4,
                    'title': 'Concerts',
                    'image': 'assets/imgs/gallery/full-gallery-content-5/0.jpg',
                    'favorite': false,
                    'items': [
                        {
                            'id': 1,
                            'title': 'Concerts 1',
                            'image': 'assets/imgs/gallery/full-gallery-content-5/1.jpg'
                        },
                        {
                            'id': 2,
                            'title': 'Concerts 2',
                            'image': 'assets/imgs/gallery/full-gallery-content-5/2.jpg'
                        },
                        {
                            'id': 3,
                            'title': 'Concerts 3',
                            'image': 'assets/imgs/gallery/full-gallery-content-5/3.jpg'
                        },
                        {
                            'id': 4,
                            'title': 'Concerts 4',
                            'image': 'assets/imgs/gallery/full-gallery-content-5/4.jpg'
                        },
                        {
                            'id': 5,
                            'title': 'Concerts 5',
                            'image': 'assets/imgs/gallery/full-gallery-content-5/5.jpg'
                        },
                        {
                            'id': 6,
                            'title': 'Concerts 6',
                            'image': 'assets/imgs/gallery/full-gallery-content-5/6.jpg'
                        },
                        {
                            'id': 7,
                            'title': 'Concerts 7',
                            'image': 'assets/imgs/gallery/full-gallery-content-5/7.jpg'
                        }
                    ]
                },
                {
                    'id': 5,
                    'title': 'Classical Guitar',
                    'image': 'assets/imgs/gallery/full-gallery-content-4/1.jpg',
                    'favorite': false,
                    'items': [
                        {
                            'id': 1,
                            'title': 'Classical Guitar 1',
                            'image': 'assets/imgs/gallery/full-gallery-content-4/0.jpg'
                        },
                        {
                            'id': 2,
                            'title': 'Classical Guitar 2',
                            'image': 'assets/imgs/gallery/full-gallery-content-4/1.jpg'
                        },
                        {
                            'id': 3,
                            'title': 'Classical Guitar 3',
                            'image': 'assets/imgs/gallery/full-gallery-content-4/2.jpg'
                        },
                        {
                            'id': 4,
                            'title': 'Classical Guitar 4',
                            'image': 'assets/imgs/gallery/full-gallery-content-4/3.jpg'
                        },
                        {
                            'id': 5,
                            'title': 'Classical Guitar 5',
                            'image': 'assets/imgs/gallery/full-gallery-content-4/4.jpg'
                        },
                        {
                            'id': 6,
                            'title': 'Classical Guitar 6',
                            'image': 'assets/imgs/gallery/full-gallery-content-4/5.jpg'
                        }
                    ]
                },
                {
                    'id': 6,
                    'title': 'Camera',
                    'image': 'assets/imgs/gallery/full-gallery-content-3/1.jpg',
                    'favorite': false,
                    'items': [
                        {
                            'id': 1,
                            'title': 'Camera 1',
                            'image': 'assets/imgs/gallery/full-gallery-content-3/2.jpg'
                        },
                        {
                            'id': 2,
                            'title': 'Camera 2',
                            'image': 'assets/imgs/gallery/full-gallery-content-3/1.jpg'
                        },
                        {
                            'id': 3,
                            'title': 'Camera 3',
                            'image': 'assets/imgs/gallery/full-gallery-content-3/3.jpg'
                        },
                        {
                            'id': 4,
                            'title': 'Camera 4',
                            'image': 'assets/imgs/gallery/full-gallery-content-3/4.jpg'
                        },
                        {
                            'id': 5,
                            'title': 'Camera 5',
                            'image': 'assets/imgs/gallery/full-gallery-content-3/5.jpg'
                        },
                        {
                            'id': 6,
                            'title': 'Camera 6',
                            'image': 'assets/imgs/gallery/full-gallery-content-3/6.jpg'
                        }
                    ]
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
                    .object('imageGallery/' + item.theme)
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
