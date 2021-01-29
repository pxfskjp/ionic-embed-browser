import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { ToastService } from './toast-service';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class ListViewGoogleCardsService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

    getId = (): string => 'googleCards';

    getTitle = (): string => 'Google Cards';

    getAllThemes = (): Array<any> => {
        return [
            { 'url': 'google-card/0', 'title': 'Styled cards', 'theme': 'layout1' },
            { 'url': 'google-card/1', 'title': 'Styled cards 2', 'theme': 'layout2' },
            { 'url': 'google-card/2', 'title': 'Full image cards', 'theme': 'layout3' },
            { 'url': 'google-card/3', 'title': 'Full image cards with avatar', 'theme': 'layout4' }
        ];
    }

    //* Data Set for page 1
    getDataForLayout1 = (): any => {
        return {
            'toolbarTitle' : 'Styled cards',
            'title': 'PlaylistName',
            'description': 'Author:Username',
            'duration': '35:72',
            'items': [
                {
                    'id': 1,
                    'title': 'Jessica Miles',
                    'image': 'assets/imgs/avatar/0.jpg',
                    'description': 'Birth year: 1984',
                    'shortDescription': 'Country: Germany',
                    'longDescription': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                    'iconLike': 'icon-thumb-up',
                    'iconFavorite': 'icon-heart',
                    'iconShare': 'icon-share-variant'
                },
                {
                    'id': 2,
                    'title': 'Natasha Gamble',
                    'image': 'assets/imgs/avatar/1.jpg',
                    'description': 'Birth year: 1980',
                    'shortDescription': 'Country: Germany',
                    'longDescription': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                    'iconLike': 'icon-thumb-up',
                    'iconFavorite': 'icon-heart',
                    'iconShare': 'icon-share-variant'
                },
                {
                    'id': 3,
                    'title': 'Julia Petersen',
                    'image': 'assets/imgs/avatar/2.jpg',
                    'description': 'Birth year: 1984',
                    'shortDescription': 'Country: Germany',
                    'longDescription': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                    'iconLike': 'icon-thumb-up',
                    'iconFavorite': 'icon-heart',
                    'iconShare': 'icon-share-variant'
                },
                {
                    'id': 4,
                    'title': 'Marisa Cain',
                    'image': 'assets/imgs/avatar/3.jpg',
                    'description': 'Birth year: 1984',
                    'shortDescription': 'Country: Germany',
                    'longDescription': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                    'iconLike': 'icon-thumb-up',
                    'iconFavorite': 'icon-heart',
                    'iconShare': 'icon-share-variant'
                },
                {
                    'id': 5,
                    'title': 'Lara Lynn',
                    'image': 'assets/imgs/avatar/4.jpg',
                    'description': 'Birth year: 1984',
                    'shortDescription': 'Country: Germany',
                    'longDescription': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                    'iconLike': 'icon-thumb-up',
                    'iconFavorite': 'icon-heart',
                    'iconShare': 'icon-share-variant'
                },
                {
                    'id': 6,
                    'title': 'Megan Singleton',
                    'image': 'assets/imgs/avatar/5.jpg',
                    'description': 'Birth year: 1984',
                    'shortDescription': 'Country: Germany',
                    'longDescription': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                    'iconLike': 'icon-thumb-up',
                    'iconFavorite': 'icon-heart',
                    'iconShare': 'icon-share-variant'
                },
                {
                    'id': 7,
                    'title': 'Susanna Simmons',
                    'image': 'assets/imgs/avatar/6.jpg',
                    'description': 'Birth year: 1984',
                    'shortDescription': 'Country: Germany',
                    'longDescription': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                    'iconLike': 'icon-thumb-up',
                    'iconFavorite': 'icon-heart',
                    'iconShare': 'icon-share-variant'
                },
                {
                    'id': 8,
                    'title': 'Juliette Medina',
                    'image': 'assets/imgs/avatar/7.jpg',
                    'description': 'Birth year: 1984',
                    'shortDescription': 'Country: Germany',
                    'longDescription': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                    'iconLike': 'icon-thumb-up',
                    'iconFavorite': 'icon-heart',
                    'iconShare': 'icon-share-variant'
                }
            ]
        };
    }

    //* Data Set for page 2
    getDataForLayout2 = (): any => {
        return {
            'toolbarTitle' : 'Styled cards 2',
            'items': [
                {
                    'id': 1,
                    'title': 'Fortuitu ad aeroportus',
                    'titleHeader': 'Simul quanta praecinctionis',
                    'description': `Contra opinione vulgi, accumsan non tantum temere text.
                    Quod habet radices in fragmen literaturam Romanam classicam a XLV BC, MM facit super annos. Richard McClintock`,
                    'image': 'assets/imgs/background/1.jpg',
                    'button': 'EXPLORE',
                    'shareButton': 'SHARE'
                },
                {
                    'id': 2,
                    'title': 'Hoc est exortum',
                    'titleHeader': 'Pedestres sub imprudentia contentum',
                    'description': `Contra opinione vulgi, accumsan non tantum temere text.
                    Quod habet radices in fragmen literaturam Romanam classicam a XLV BC, MM facit super annos. Richard McClintock`,
                    'image': 'assets/imgs/background/2.jpg',
                    'button': 'EXPLORE',
                    'shareButton': 'SHARE'
                },
                {
                    'id': 3,
                    'title': 'Communications moderatoris',
                    'titleHeader': 'Technica et Internet habeat facultatem',
                    'description': `Contra opinione vulgi, accumsan non tantum temere text.
                    Quod habet radices in fragmen literaturam Romanam classicam a XLV BC, MM facit super annos. Richard McClintock`,
                    'image': 'assets/imgs/background/5.jpg',
                    'button': 'EXPLORE',
                    'shareButton': 'SHARE'
                },
                {
                    'id': 4,
                    'title': 'Tabulas scripto munus agere providere',
                    'titleHeader': 'Ut adeptus est atrium',
                    'description': `Contra opinione vulgi, accumsan non tantum temere text.
                    Quod habet radices in fragmen literaturam Romanam classicam a XLV BC, MM facit super annos. Richard McClintock`,
                    'image': 'assets/imgs/background/3.jpg',
                    'button': 'EXPLORE',
                    'shareButton': 'SHARE'
                },
                {
                    'id': 5,
                    'title': 'In outpatient nuntiatum ministerium',
                    'titleHeader': 'Testis unus',
                    'description': `Contra opinione vulgi, accumsan non tantum temere text.
                    Quod habet radices in fragmen literaturam Romanam classicam a XLV BC, MM facit super annos. Richard McClintock`,
                    'image': 'assets/imgs/background/1.jpg',
                    'button': 'EXPLORE',
                    'shareButton': 'SHARE'
                }
            ]
        };
    }

    //* Data Set for page 3
    getDataForLayout3 = (): any => {
        return {
            'toolbarTitle' : 'Full image cards',
            'items': [
                {
                    'id': 1,
                    'image': 'assets/imgs/background/0.jpg',
                    'title': 'Erat quia homo ex fireman',
                    'subtitle': 'New York and Hamburg, illa ligatum ad columpnam illam in Septentrionalis.'
                },
                {
                    'id': 2,
                    'image': 'assets/imgs/background/9.jpg',
                    'title': 'Et convertit in altilium in dextera',
                    'subtitle': 'Erat illo tempore et coram dockworkers horrebant ei molestum insigne.'
                },
                {
                    'id': 3,
                    'image': 'assets/imgs/background/8.jpg',
                    'title': 'Keighley dux cum respiciens',
                    'subtitle': 'Virtute suae astu tamen libidini suae igne nautas comitarentur dolus.'
                },
                {
                    'id': 4,
                    'image': 'assets/imgs/background/1.jpg',
                    'title': 'Et gubernatori duxit in Wheelhouse',
                    'subtitle': 'Et ita tractantem bombacio ignes, sit modo ex eruditis illorum.'
                },
                {
                    'id': 5,
                    'image': 'assets/imgs/background/13.jpg',
                    'title': 'Ut legati risere pugnae Moore',
                    'subtitle': 'Lorem Ipsum is simply dummy text of the printing and typesetting.'
                },
                {
                    'id': 6,
                    'image': 'assets/imgs/background/11.jpg',
                    'title': 'Keighley dux, hactenus eius motus',
                    'subtitle': 'More triumphantis expressione malitia et hoc est, ex fireman Doherty.'
                },
                {
                    'id': 7,
                    'image': 'assets/imgs/background/12.jpg',
                    'title': 'Quattuor hic Firemen qui',
                    'subtitle': 'Legatum eum conniveret. Quod erat primum ostensum est in Keighley.'
                },
                {
                    'id': 8,
                    'image': 'assets/imgs/background/0.jpg',
                    'title': 'In conspectu erant media',
                    'subtitle': 'Et sonitus audiebatur Germanico sparteoli tussis est eis quasi ursa.'
                }
            ]
        };
    }

    //* Data Set for page 4
    getDataForLayout4 = (): any => {
        return {
            'toolbarTitle' : 'Full image cards with avatar',
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


    getDataForTheme = (menuItem: any): Array<any> => {
        return this[
            'getDataFor' +
            menuItem.theme.charAt(0).toUpperCase() +
            menuItem.theme.slice(1)
        ]();
    }

    load(item: any): Observable<any> {
        const that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('listView/googleCards/' + item.theme)
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
