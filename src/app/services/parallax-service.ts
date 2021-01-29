import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class ParallaxService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

    getTitle = (): string => 'Parallax';

    getAllThemes = (): Array<any> => {
        return [
            { 'url': 'parallax/0', 'title': 'Friends', 'theme': 'layout1' },
            { 'url': 'parallax/1', 'title': 'Product', 'theme': 'layout2' },
            { 'url': 'parallax/2', 'title': 'Basic', 'theme': 'layout3' },
            { 'url': 'parallax/3', 'title': 'Location Details', 'theme': 'layout4' }
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
            'toolbarTitle': 'Friends',
            'headerImage': 'assets/imgs/background/14.jpg',
            'toolBarTitle': 'Parallax-title',
            'title': 'Playlist Name',
            'iconLike': 'icon-thumb-up',
            'iconFavorite': 'icon-heart',
            'iconShare': 'icon-share-variant',
            'items': [
                {
                    'id': 1,
                    'title': 'Friends Of Midnight',
                    'description': 'Graciela Mitchell',
                    'image': 'assets/imgs/avatar/0.jpg',
                    'imageAlt': 'avatar',
                    'icon': 'icon-cloud-download',
                    'duration': '3:42'
                },
                {
                    'id': 2,
                    'title': 'Home Of Yesterday',
                    'description': 'Sherry Hale',
                    'image': 'assets/imgs/avatar/1.jpg',
                    'imageAlt': 'avatar',
                    'icon': 'icon-cloud-download',
                    'duration': '3:42'
                },
                {
                    'id': 3,
                    'title': 'Kiss My Friends',
                    'description': 'Shawna Norman',
                    'image': 'assets/imgs/avatar/2.jpg',
                    'imageAlt': 'avatar',
                    'icon': 'icon-cloud-download',
                    'duration': '3:42'
                },
                {
                    'id': 4,
                    'title': 'Talk About His Right',
                    'description': 'Gail Harrington',
                    'image': 'assets/imgs/avatar/3.jpg',
                    'imageAlt': 'avatar',
                    'icon': 'icon-cloud-download',
                    'duration': '3:42'
                },
                {
                    'id': 5,
                    'title': 'Boring Dreams',
                    'description': 'Tricia Yang',
                    'image': 'assets/imgs/avatar/4.jpg',
                    'imageAlt': 'avatar',
                    'icon': 'icon-cloud-download',
                    'duration': '3:42'
                },
                {
                    'id': 6,
                    'title': 'Lazy Song',
                    'description': 'Ines Campbell',
                    'image': 'assets/imgs/avatar/5.jpg',
                    'imageAlt': 'avatar',
                    'icon': 'icon-cloud-download',
                    'duration': '3:42'
                },
                {
                    'id': 7,
                    'title': 'We Won\'t Make It',
                    'description': 'Lindsey Mcgowan',
                    'image': 'assets/imgs/avatar/6.jpg',
                    'imageAlt': 'avatar',
                    'icon': 'icon-cloud-download',
                    'duration': '3:42'
                },
                {
                    'id': 8,
                    'title': 'I Know I\'m Lonely',
                    'description': 'Lucy Bender',
                    'image': 'assets/imgs/avatar/7.jpg',
                    'imageAlt': 'avatar',
                    'icon': 'icon-cloud-download',
                    'duration': '3:42'
                },
                {
                    'id': 9,
                    'title': 'Days For Forever',
                    'description': 'Petra Brewer',
                    'image': 'assets/imgs/avatar/1.jpg',
                    'imageAlt': 'avatar',
                    'icon': 'icon-cloud-download',
                    'duration': '3:42'
                },
                {
                    'id': 10,
                    'title': 'Honey, Let Me Go',
                    'description': 'Wendi Michael',
                    'image': 'assets/imgs/avatar/2.jpg',
                    'imageAlt': 'avatar',
                    'icon': 'icon-cloud-download',
                    'duration': '3:42'
                },
                {
                    'id': 11,
                    'title': 'Forgot His Heart',
                    'description': 'Sherri Stokes',
                    'image': 'assets/imgs/avatar/0.jpg',
                    'imageAlt': 'avatar',
                    'icon': 'icon-cloud-download',
                    'duration': '3:42'
                },
                {
                    'id': 12,
                    'title': 'Plain Old Mind',
                    'description': 'Bryan Conway',
                    'image': 'assets/imgs/avatar/3.jpg',
                    'imageAlt': 'avatar',
                    'icon': 'icon-cloud-download',
                    'duration': '3:42'
                }
            ]
        };
    }

    //* Data Set for page 2
    getDataForLayout2 = (): any => {
        return {
            'toolbarTitle': 'Product',
            'headerImage': 'assets/imgs/background/7.jpg',
            'toolBarTitle': 'Product',
            'title': 'Super discount',
            'description': '50% OFF',
            'iconLike': 'icon-thumb-up',
            'iconFavorite': 'icon-heart',
            'iconShare': 'icon-share-variant',
            'items': [
                {
                    'id': 1,
                    'title': 'Black Shirt',
                    'image': 'assets/imgs/avatar/0.jpg',
                    'description': 'Duis aute irure dolor in reprehenderit',
                    'oldPrice': '$42.99',
                    'newPrice': '$35.99'
                },
                {
                    'id': 2,
                    'title': 'Black Sweater',
                    'image': 'assets/imgs/avatar/1.jpg',
                    'description': 'Duis aute irure dolor in reprehenderit',
                    'oldPrice': '$42.99',
                    'newPrice': '$35.99'
                },
                {
                    'id': 3,
                    'title': 'Shirt',
                    'image': 'assets/imgs/avatar/2.jpg',
                    'description': 'Duis aute irure dolor in reprehenderit',
                    'oldPrice': '$42.99',
                    'newPrice': '$35.99'
                },
                {
                    'id': 4,
                    'title': 'White Shirt',
                    'image': 'assets/imgs/avatar/3.jpg',
                    'description': 'Duis aute irure dolor in reprehenderit',
                    'oldPrice': '$42.99',
                    'newPrice': '$35.99'
                },
                {
                    'id': 5,
                    'title': 'White T Shirt',
                    'image': 'assets/imgs/avatar/4.jpg',
                    'description': 'Duis aute irure dolor in reprehenderit',
                    'oldPrice': '$42.99',
                    'newPrice': '$35.99'
                },
                {
                    'id': 6,
                    'title': 'Hoodies',
                    'image': 'assets/imgs/avatar/5.jpg',
                    'description': 'Duis aute irure dolor in reprehenderit',
                    'oldPrice': '$42.99',
                    'newPrice': '$35.99'
                },
                {
                    'id': 7,
                    'title': 'Black Shirt',
                    'image': 'assets/imgs/avatar/0.jpg',
                    'description': 'Duis aute irure dolor in reprehenderit',
                    'oldPrice': '$42.99',
                    'newPrice': '$35.99'
                },
                {
                    'id': 8,
                    'title': 'Black Sweater',
                    'image': 'assets/imgs/avatar/1.jpg',
                    'description': 'Duis aute irure dolor in reprehenderit',
                    'oldPrice': '$42.99',
                    'newPrice': '$35.99'
                },
                {
                    'id': 9,
                    'title': 'Shirt',
                    'image': 'assets/imgs/avatar/2.jpg',
                    'description': 'Duis aute irure dolor in reprehenderit',
                    'oldPrice': '$42.99',
                    'newPrice': '$35.99'
                },
                {
                    'id': 10,
                    'title': 'White Shirt',
                    'image': 'assets/imgs/avatar/3.jpg',
                    'description': 'Duis aute irure dolor in reprehenderit',
                    'oldPrice': '$42.99',
                    'newPrice': '$35.99'
                },
                {
                    'id': 11,
                    'title': 'White T Shirt',
                    'image': 'assets/imgs/avatar/4.jpg',
                    'description': 'Duis aute irure dolor in reprehenderit',
                    'oldPrice': '$42.99',
                    'newPrice': '$35.99'
                },
                {
                    'id': 12,
                    'title': 'Hoodies',
                    'image': 'assets/imgs/avatar/5.jpg',
                    'description': 'Duis aute irure dolor in reprehenderit',
                    'oldPrice': '$42.99',
                    'newPrice': '$35.99'
                }
            ]
        };
    }

    //* Data Set for page 3
    getDataForLayout3 = (): any => {
        return {
            'toolbarTitle': 'Basic',
            'headerImage': 'assets/imgs/background/2.jpg',
            'avatar': 'assets/imgs/avatar/0.jpg',
            'items': [
                {
                    'id': 1,
                    'title': 'Isaac Raid',
                    'image': 'assets/imgs/avatar/0.jpg',
                    'icon': 'icon-heart',
                    'favorite': false
                },
                {
                    'id': 2,
                    'title': 'Jason Graham',
                    'image': 'assets/imgs/avatar/1.jpg',
                    'icon': 'icon-heart',
                    'favorite': false
                },
                {
                    'id': 3,
                    'title': 'Abigail Ross',
                    'image': 'assets/imgs/avatar/2.jpg',
                    'icon': 'icon-heart',
                    'favorite': false
                },
                {
                    'id': 4,
                    'title': 'Justin Rutherford',
                    'image': 'assets/imgs/avatar/3.jpg',
                    'icon': 'icon-heart',
                    'favorite': false
                },
                {
                    'id': 5,
                    'title': 'Nicholas Henderson',
                    'image': 'assets/imgs/avatar/4.jpg',
                    'icon': 'icon-heart',
                    'favorite': false
                },
                {
                    'id': 6,
                    'title': 'Elizabeth Mackenzie',
                    'image': 'assets/imgs/avatar/5.jpg',
                    'icon': 'icon-heart',
                    'favorite': false
                },
                {
                    'id': 7,
                    'title': 'Melanie Ferguson',
                    'image': 'assets/imgs/avatar/6.jpg',
                    'icon': 'icon-heart',
                    'favorite': false
                },
                {
                    'id': 8,
                    'title': 'Fiona Kelly',
                    'image': 'assets/imgs/avatar/7.jpg',
                    'icon': 'icon-heart',
                    'favorite': false
                },
                {
                    'id': 9,
                    'title': 'Nicholas King',
                    'image': 'assets/imgs/avatar/8.jpg',
                    'icon': 'icon-heart',
                    'favorite': false
                },
                {
                    'id': 10,
                    'title': 'Victoria Mitchell',
                    'image': 'assets/imgs/avatar/9.jpg',
                    'icon': 'icon-heart',
                    'favorite': false
                },
                {
                    'id': 11,
                    'title': 'Sophie Lyman',
                    'image': 'assets/imgs/avatar/10.jpg',
                    'icon': 'icon-heart',
                    'favorite': false
                },
                {
                    'id': 12,
                    'title': 'Carl Ince',
                    'image': 'assets/imgs/avatar/11.jpg',
                    'icon': 'icon-heart',
                    'favorite': false
                },
                {
                    'id': 13,
                    'title': 'Michelle Slater',
                    'image': 'assets/imgs/avatar/12.jpg',
                    'icon': 'icon-heart',
                    'favorite': false
                },
                {
                    'id': 14,
                    'title': 'Ryan Mathis',
                    'image': 'assets/imgs/avatar/13.jpg',
                    'icon': 'icon-heart',
                    'favorite': false
                },
                {
                    'id': 15,
                    'title': 'Julia Grant',
                    'image': 'assets/imgs/avatar/14.jpg',
                    'icon': 'icon-heart',
                    'favorite': false
                },
                {
                    'id': 16,
                    'title': 'Hannah Martin',
                    'image': 'assets/imgs/avatar/15.jpg',
                    'icon': 'icon-heart',
                    'favorite': false
                }
            ]
        };
    }

    //* Data Set for page 4
    getDataForLayout4 = (): any => {
        return {
            'toolbarTitle': 'Location Details',
            'headerImage': 'assets/imgs/background/17.jpg',
            'title': 'Joe\'s restaurant',
            'iconLike': 'icon-thumb-up',
            'iconFavorite': 'icon-comment',
            'iconShare': 'icon-share-variant',
            'reviews': '4.12 (78 reviews)',
            'iconButton': 'icon-walk',
            'description': `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
             ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.`,
            'description2': `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
             ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.`,
            'description3': `It is a long established fact that a reader will be distracted by the readable
             content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
              a more-or-less normal distribution of letters, as opposed to using Content here, content here,
               making it look like readable English`,
            'description4': `Contrary to popular belief, Lorem Ipsum is not simply random text.
             It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
              Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
               looked up one of the more obscure Latin words, consectetur,
             from a Lorem Ipsum passage, and going through the cites of the word
              in classical literature, discovered the undoubtable source.`,
            'iconsStars': [
                {
                    'isActive': true,
                    'iconActive': 'icon-star-outline',
                    'iconInactive': 'icon-star'
                },
                {
                    'isActive': true,
                    'iconActive': 'icon-star-outline',
                    'iconInactive': 'icon-star'
                },
                {
                    'isActive': true,
                    'iconActive': 'icon-star-outline',
                    'iconInactive': 'icon-star'
                },
                {
                    'isActive': true,
                    'iconActive': 'icon-star-outline',
                    'iconInactive': 'icon-star'
                },
                {
                    'isActive': false,
                    'iconActive': 'icon-star-outline',
                    'iconInactive': 'icon-star'
                }
            ],
            'items': [
                {
                    'id': 1,
                    'name': 'ADDRESS:',
                    'value': 'Boulevard of food, New York, USA'
                },
                {
                    'id': 2,
                    'name': 'PHONE:',
                    'value': '+555 555 555'
                },
                {
                    'id': 3,
                    'name': 'WEB:',
                    'value': 'www.joesrestaurant.com'
                },
                {
                    'id': 4,
                    'name': 'MAIL:',
                    'value': 'jimmy@gmail.com'
                },
                {
                    'id': 5,
                    'name': 'WORKING HOURS:',
                    'value': '7:00 to 23:00 every day'
                }
            ]
        };
    }

    load(item: any): Observable<any> {
        this.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('parallax/' + item.theme)
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
