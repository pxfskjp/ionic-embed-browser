import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';

@Injectable({ providedIn: 'root' })
export class HomeService {

    constructor(public af: AngularFireDatabase) { }

    // Set data for - HOME PAGE
    getData = () => {
        return {
            'toolbarTitle': 'Home',
            'title': 'Altares',
            'items': [
                {
                    'id': 1,
                    'avatar': 'assets/imgs/avatar/1.jpg',
                    'avatarTitle': 'Katlynn Pouros',
                    'avatarSubtitle': 'from Los Angeles',
                    'time': '15 min ago',
                    'image': 'assets/imgs/background/0.jpg',
                    'title': 'Women in the Slaves',
                    'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`
                },
                {
                    'id': 2,
                    'avatar': 'assets/imgs/avatar/2.jpg',
                    'avatarTitle': 'Katlynn Pouros',
                    'avatarSubtitle': 'from Los Angeles',
                    'time': '21 min ago',
                    'image': 'assets/imgs/background/1.jpg',
                    'title': 'Women in the Slaves',
                    'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`
                },
                {
                    'id': 3,
                    'avatar': 'assets/imgs/avatar/3.jpg',
                    'avatarTitle': 'Katlynn Pouros',
                    'avatarSubtitle': 'from Los Angeles',
                    'time': '29 min ago',
                    'image': 'assets/imgs/background/2.jpg',
                    'title': 'Women in the Slaves',
                    'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`
                },
                {
                    'id': 4,
                    'avatar': 'assets/imgs/avatar/4.jpg',
                    'avatarTitle': 'Katlynn Pouros',
                    'avatarSubtitle': 'from Los Angeles',
                    'time': '32 min ago',
                    'image': 'assets/imgs/background/3.jpg',
                    'title': 'Women in the Slaves',
                    'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`
                },
                {
                    'id': 5,
                    'avatar': 'assets/imgs/avatar/5.jpg',
                    'avatarTitle': 'Katlynn Pouros',
                    'avatarSubtitle': 'from Los Angeles',
                    'time': '45 min ago',
                    'image': 'assets/imgs/background/4.jpg',
                    'title': 'Women in the Slaves',
                    'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`
                },
                {
                    'id': 6,
                    'avatar': 'assets/imgs/avatar/6.jpg',
                    'avatarTitle': 'Katlynn Pouros',
                    'avatarSubtitle': 'from Los Angeles',
                    'time': '21 min ago',
                    'image': 'assets/imgs/background/5.jpg',
                    'title': 'Women in the Slaves',
                    'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`
                }
            ]
        };
    }

    load(): Observable<any> {
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('home')
                    .valueChanges()
                    .subscribe(snapshot => {
                        observer.next(snapshot);
                        observer.complete();
                    }, err => {
                        observer.error([]);
                        observer.complete();
                    });
            });
        } else {
            return new Observable(observer => {
                observer.next(this.getData());
                observer.complete();
            });
        }
    }
}
