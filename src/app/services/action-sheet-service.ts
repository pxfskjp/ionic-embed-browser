import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class ActionSheetService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

    getId = (): string => 'actionSheet';

    getTitle = (): string => 'Action Sheet';

    getAllThemes = (): Array<any> => {
        return [
            { 'url': 'action-sheet/0', 'title': 'Basic', 'theme': 'layout1' },
            { 'url': 'action-sheet/1', 'title': 'News', 'theme': 'layout2' },
            { 'url': 'action-sheet/2', 'title': 'With Text Header', 'theme': 'layout3' }
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
            'toolbarTitle': 'Basic',
            'headerImage': 'assets/imgs/background/26.jpg',
            'shareIcon': "ellipsis-vertical",
            'actionSheet': {
                'buttons': [
                    {
                        'text': 'Add to Cart',
                        'role': 'destructive'
                    },
                    {
                        'text': 'Add to Favorites'
                    },
                    {
                        'text': 'Read more info'
                    },
                    {
                        'text': 'Delete Item'
                    },
                    {
                        'text': 'Cancel',
                        'role': 'cancel'
                    }
                ]
            },
            'items': [
                {
                    'id': 1,
                    'title': 'dixisse isaac',
                    'subtitle': 'subtilissima illud',
                    'category': 'category',
                    'button': '$14.99',
                    'productDescriptions': [
                        {
                            'id': 1,
                            'description': 'Invenimus quod de proelio et user mos significant generatae socialis contentus in locis coniciunt in sui civitas active versantur in progressionem in products et servicia et recensionem. Notam ostendere ab advocatis de interest in in occupatus timendus fuerit productum vel servitium quam consummatio, et usus eius et co-progressionem hanc occasionem praebet ad eos, et per facultatem publice agnita quod aliqualiter pro conlatione.'
                        },
                        {
                            'id': 2,
                            'description': 'Labore et dolore eu consequat cupidatat commodo met enim sit ipsum ut sint duis minim. Sint aliqua pariatur duis Xercitation est ad ut. Sancti minim deserunt laborum voluptate velit esse ipsum veniam deserunt veniam proident sint non exercitationem.'
                        },
                        {
                            'id': 3,
                            'description': 'Lectionum ac recentius in desktop software quasi operturus Jeep libellorum ex eros etiam accumsan. Non remansit quinque saecula non tantum, sed etiam in saltu electronic condimentum, remanserant per se unum. Is eram in 1960 popularized cum remissionis de Letraset Folia accumsan.'
                        },
                        {
                            'id': 4,
                            'description': 'Lectionum ac recentius in desktop software quasi operturus Jeep libellorum ex eros etiam accumsan. Non remansit quinque saecula non tantum, sed etiam in saltu electronic condimentum, remanserant per se unum. Is eram in 1960 popularized cum remissionis de Letraset Folia accumsan.'
                        }
                    ]
                }
            ]
        }
    };

    //* Data Set for page 2
    getDataForLayout2 = (): any => {
        return {
            'toolbarTitle': 'News',
            'headerImage': 'assets/imgs/background/23.jpg',
            'title': 'Infinit pontem in Sinis. Quod locus non videre finem pontis. VII deambulatio inter homines pereunt.',
            'subtitle': 'per marescalluml',
            'category': 'Category',
            'avatar': 'assets/imgs/avatar/3.jpg',
            'shareIcon': "ellipsis-vertical",
            'actionSheet': {
                'buttons': [
                    {
                        'text': 'Add to Cart',
                        'role': 'destructive'
                    },
                    {
                        'text': 'Add to Favorites'
                    },
                    {
                        'text': 'Read more info'
                    },
                    {
                        'text': 'Delete Item'
                    },
                    {
                        'text': 'Cancel',
                        'role': 'cancel'
                    }
                ]
            },
            'items': [
                {
                    'id': 1,
                    'subtitle': "Hoc est, visu nova thriller, posuit orbem in fimbriis modern arte, quae est tenebrosa, haunting, torta - vertit se et in suo modo. Non quod objective, et arte discipulus apud Notingham, nuper Jack quae ducitur 'diluvium, ' frigus, saeva enfant inexpugnabiles omnes modern art. Et vadit ad deversorium cubiculum vult bibere et cetera id exuendum statum tunc illa e somno evigilans in lecto suo."
                },
                {
                    'id': 2,
                    'subtitle': 'Percussas pavore est, sane, sed etiam in auribus eorum amplius diluvium ad inveniendum, qui utitur maxime auctoribus imaginum cinematographicarum praebere video camera ejus vita (hoc est ars, ut videtur). Et obliti sunt ea nocte in hotel cubiculum terminus sursum in quodam loco quis gallery? Si illa ad magistratus? Et factum est, ut quod deest illi amice Jenny?'
                },
                {
                    'id': 3,
                    'subtitle': 'It takes sursum magis, nimis longum est aedificate (usque ad paginam fere CLX) Ad validam in mia quia actio, sed altiore hoc est a dolor modern thriller, et fortiter mentis habitu femineo (adhuc inusitato scelus ficta). Jaq Hazell vigilare sit an author.'
                },
                {
                    'id': 4,
                    'subtitle': 'Vesalius habet cum ramosis in lupinotuum, conscripserit et comici librorum, sed saeva Lane videt eum quasi animam suam antiquis nota mundo, quamvis tempus suum ingenia sunt paulo plus crevit et hi qui crediderant, cum ex Novus York ad urbem est viridius, affluentes, et suburbana earum.'
                }
            ]
        };
    };

    //* Data Set for page 3
    getDataForLayout3 = (): any => {
        return {
            'toolbarTitle': 'With Text Header',
            'shareIcon': "ellipsis-vertical",
            'actionSheet': {
                'title': 'Choose what to do with this card?',
                'buttons': [
                    {
                        'text': 'Read more',
                        'role': 'destructive'
                    },
                    {
                        'text': 'Add to Favorites'
                    },
                    {
                        'text': 'Delete Card'
                    },
                    {
                        'text': 'Disable Card'
                    },
                    {
                        'text': 'Cancel',
                        'role': 'cancel'
                    }
                ]
            },
            'items': [
                {
                    'id': 1,
                    'category': 'Travel',
                    'image': 'assets/imgs/background/2.jpg',
                    'title': 'Aliquam Liberum Ride',
                    'subtitle': 'Dunbar, Bangladesh'
                },
                {
                    'id': 2,
                    'category': 'Travel',
                    'image': 'assets/imgs/background/1.jpg',
                    'title': 'De Aeris Aperta',
                    'subtitle': 'Harold, Spain'
                },
                {
                    'id': 3,
                    'category': 'Event',
                    'image': 'assets/imgs/background/0.jpg',
                    'title': 'Mare turtures',
                    'subtitle': 'Hilltop, France'
                },
                {
                    'id': 4,
                    'category': 'Travel',
                    'image': 'assets/imgs/background/3.jpg',
                    'title': 'Mons Trout',
                    'subtitle': 'Boonville, Mexico'
                },
                {
                    'id': 5,
                    'category': 'Event',
                    'image': 'assets/imgs/background/4.jpg',
                    'title': 'Aliquam Pontem',
                    'subtitle': 'Bath, Finland'
                },
                {
                    'id': 6,
                    'category': 'Travel',
                    'image': 'assets/imgs/background/5.jpg',
                    'title': 'Scaena Eventus Pelagus',
                    'subtitle': 'Cazadero, United Kingdom'
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
                    .object('actionSheet/' + item.theme)
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
