import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { ToastService } from './toast-service';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class ProfileService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

    getTitle = (): string => 'Profile';

    getAllThemes = (): Array<any> => {
        return [
            { 'url': 'profile/0', 'title': 'Profile With Avatar', 'theme': 'layout1' },
            { 'url': 'profile/1', 'title': 'Profile with Slider + Comments', 'theme': 'layout2' },
            { 'url': 'profile/2', 'title': 'Profile Basic', 'theme': 'layout3' },
            { 'url': 'profile/3', 'title': 'Profile with Slider', 'theme': 'layout4' },
            { 'url': 'profile/4', 'title': 'Profile with Big Image', 'theme': 'layout5' }
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
            'toolbarTitle': 'Profile With Avatar',
            'image': 'assets/imgs/avatar/24.jpg',
            'title': 'Claire Stewart',
            'subtitle': 'Extreme coffee lover. Twitter maven. Internet practitioner. Beeraholic.',
            'category': 'populary',
            'items': [
                {
                    'id': 1,
                    'category': 'Operating Systems',
                    'title': 'Windows Server 2019 remains in release limbo',
                    'like': {
                        'icon': 'heart',
                        'number': '4',
                        'text': 'Like',
                        'isActive': true
                    },
                    'comment': {
                        'icon': 'chatbubbles',
                        'number': '4',
                        'text': 'Comments',
                        'isActive': false
                    }
                },
                {
                    'id': 2,
                    'category': 'Mobile',
                    'title': 'When it comes to mobile, you pretty much have no privacy rights',
                    'like': {
                        'icon': 'heart',
                        'number': '4',
                        'text': 'Like',
                        'isActive': true
                    },
                    'comment': {
                        'icon': 'chatbubbles',
                        'number': '4',
                        'text': 'Comments',
                        'isActive': false
                    }
                },
                {
                    'id': 3,
                    'category': 'Software',
                    'title': 'PowerPoint 2016 cheat sheet',
                    'like': {
                        'icon': 'heart',
                        'number': '4',
                        'text': 'Like',
                        'isActive': true
                    },
                    'comment': {
                        'icon': 'chatbubbles',
                        'number': '4',
                        'text': 'Comments',
                        'isActive': false
                    }
                }
            ]
        };
    }

    //* Data Set for page 2
    getDataForLayout2 = (): any => {
        return {
            'toolbarTitle': 'Profile with Slider + Comments',
            'image': 'assets/imgs/avatar/20.jpg',
            'title': 'Benjamin Wilson',
            'subtitle': 'Extreme coffee lover. Twitter maven. Internet practitioner. Beeraholic.',
            'category': 'populary posts',
            'followers': 'Followers',
            'valueFollowers': '439',
            'following': 'Following',
            'valueFollowing': '297',
            'posts': 'Posts',
            'valuePosts': '43',
            'items': [
                {
                    'id': 1,
                    'category': 'Operating Systems',
                    'title': 'Software is often divided into application software, or user downloaded programs that fulfill a want or need',
                    'like': {
                        'icon': 'heart',
                        'text': 'Like',
                        'isActive': true
                    },
                    'comment': {
                        'icon': 'chatbubbles',
                        'number': '4',
                        'text': 'Comments',
                        'isActive': false
                    }
                },
                {
                    'id': 2,
                    'category': 'Mobile',
                    'title': 'A mobile phone typically operates on a cellular network, which is composed of cell sites scattered throughout cities,',
                    'like': {
                        'icon': 'heart',
                        'text': 'Like',
                        'isActive': true
                    },
                    'comment': {
                        'icon': 'chatbubbles',
                        'number': '4',
                        'text': 'Comments',
                        'isActive': false
                    }
                },
                {
                    'id': 3,
                    'category': 'Software',
                    'title': 'There are many different and not alternative ways in order to order and classify application software.',
                    'like': {
                        'icon': 'heart',
                        'text': 'Like',
                        'isActive': true
                    },
                    'comment': {
                        'icon': 'chatbubbles',
                        'number': '4',
                        'text': 'Comments',
                        'isActive': false
                    }
                }
            ]
        };
    }

    //* Data Set for page 3
    getDataForLayout3 = (): any => {
        return {
            'toolbarTitle': 'Profile Basic',
            'image': 'assets/imgs/avatar/21.jpg',
            'title': 'Carolyn Guerrero',
            'subtitle': 'Extreme coffee lover. Twitter maven. Internet practitioner. Beeraholic.',
            'category': 'populary',
            'followers': 'Followers',
            'valueFollowers': '439',
            'following': 'Following',
            'valueFollowing': '297',
            'posts': 'Posts',
            'valuePosts': '43',
            'items': [
                {
                    'id': 1,
                    'category': 'architecture news in Building',
                    'backgroundCard': 'assets/imgs/background/15.jpg',
                    'title': 'International Design Museum of China',
                    'like': {
                        'icon': 'heart',
                        'text': 'Like',
                        'isActive': true
                    },
                    'comment': {
                        'icon': 'chatbubbles',
                        'number': '4',
                        'text': 'Comments',
                        'isActive': false
                    }
                },
                {
                    'id': 2,
                    'category': 'architecture news in Building',
                    'backgroundCard': 'assets/imgs/background/21.jpg',
                    'title': 'Just because a building looks ugly',
                    'like': {
                        'icon': 'heart',
                        'text': 'Like',
                        'isActive': true
                    },
                    'comment': {
                        'icon': 'chatbubbles',
                        'number': '4',
                        'text': 'Comments',
                        'isActive': false
                    }
                },
                {
                    'id': 3,
                    'category': 'bridge architecture and design',
                    'backgroundCard': 'assets/imgs/background/14.jpg',
                    'title': 'world\'s longest sea bridge',
                    'like': {
                        'icon': 'heart',
                        'text': 'Like',
                        'isActive': true
                    },
                    'comment': {
                        'icon': 'chatbubbles',
                        'number': '4',
                        'text': 'Comments',
                        'isActive': false
                    }
                }
            ]
        };
    }

    //* Data Set for page 4
    getDataForLayout4 = (): any => {
        return {
            'toolbarTitle': 'Profile with Slider',
            'image': 'assets/imgs/avatar/16.jpg',
            'title': 'Amanda Smith',
            'subtitle': 'Extreme coffee lover. Twitter maven. Internet practitioner. Beeraholic.',
            'category': 'populary',
            'followers': 'Followers',
            'valueFollowers': '439',
            'following': 'Following',
            'valueFollowing': '297',
            'posts': 'Posts',
            'valuePosts': '43',
            'items': [
                {
                    'id': 1,
                    'category': 'architecture news in  Building',
                    'backgroundCard': 'assets/imgs/background/15.jpg',
                    'title': 'International Design Museum of China',
                    'like': {
                        'icon': 'heart',
                        'text': 'Like',
                        'isActive': true
                    },
                    'comment': {
                        'icon': 'chatbubbles',
                        'number': '4',
                        'text': 'Comments',
                        'isActive': false
                    }
                },
                {
                    'id': 2,
                    'category': 'architecture news in Building',
                    'backgroundCard': 'assets/imgs/background/21.jpg',
                    'title': 'Just because a building looks ugly',
                    'like': {
                        'icon': 'heart',
                        'text': 'Like',
                        'isActive': true
                    },
                    'comment': {
                        'icon': 'chatbubbles',
                        'number': '4',
                        'text': 'Comments',
                        'isActive': false
                    }
                },
                {
                    'id': 3,
                    'category': 'bridge architecture and design',
                    'backgroundCard': 'assets/imgs/background/14.jpg',
                    'title': 'World\'s longest sea bridge',
                    'like': {
                        'icon': 'heart',
                        'text': 'Like',
                        'isActive': true
                    },
                    'comment': {
                        'icon': 'chatbubbles',
                        'number': '4',
                        'text': 'Comments',
                        'isActive': false
                    }
                }
            ]
        };
    }

    //* Data Set for page 5
    getDataForLayout5 = (): any => {
        return {
            'toolbarTitle': 'Profile with Big Image',
            'headerImage': 'assets/imgs/background/22.jpg',
            'image': 'assets/imgs/avatar/22.jpg',
            'title': 'Carolyn Guerrero',
            'subtitle': 'Extreme coffee lover. Twitter maven. Internet practitioner. Beeraholic.',
            'category': 'populary',
            'followers': 'Followers',
            'valueFollowers': '439',
            'following': 'Following',
            'valueFollowing': '297',
            'posts': 'Posts',
            'valuePosts': '43',
            'iconFacebook': 'logo-facebook',
            'iconTwitter': 'logo-twitter',
            'iconInstagram': 'logo-instagram',
            'items': [
                {
                    'id': 1,
                    'iconPhone': 'call',
                    'iconMail': 'mail-open',
                    'iconGlobe': 'globe',
                    'phone': 'i598-968-5698987',
                    'mail': 'dev@csform.com',
                    'globe': 'csform.com',
                    'content': 'Content',
                    'subtitle': `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                     industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                      it to make a type specimen book.`,
                    'title': 'About'
                }
            ]
        };
    }

    load(item: any): Observable<any> {
        this.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('profile/' + item.theme)
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
