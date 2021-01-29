import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { ToastService } from './toast-service';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class WizardService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

    getTitle = (): string => 'Wizard';

    getAllThemes = (): Array<any> => {
        return [
            { 'url': 'wizard/0', 'title': 'Simple + icon', 'theme': 'layout1' },
            { 'url': 'wizard/1', 'title': 'Big image', 'theme': 'layout2' },
            { 'url': 'wizard/2', 'title': 'Big Image + Text', 'theme': 'layout3' },
            { 'url': 'wizard/3', 'title': 'Article with Text', 'theme': 'layout4' }
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
            'toolbarTitle': 'Simple + icon',
            'btnPrev': 'Previous',
            'btnNext': 'Next',
            'btnFinish': 'Finish',
            'items': [
                {
                    'iconSlider': 'icon-star-outline',
                    'title': 'Fortuitu ad aeroportus',
                    'description': `Morbi lacinia interdum nulla penatibus amet nibh adipiscing semper ligula,
                        tempor sed do eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad minima veniam,
                        quis exercitationem ullamco nostrud laboris nisi ut ex ea commodo aliquip consequat.`
                },
                {
                    'iconSlider': 'icon-star-half',
                    'title': 'Communications moderatoris',
                    'description': `Dolor in reprehenderit in duis irure voluptate velit esse
                      fugiat dolore eu nulla pariatur cillum. Non cupidatat excepteur occaecat
                      proident sint, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
                },
                {
                    'iconSlider': 'icon-star',
                    'title': 'Hoc est exortum',
                    'description': `Ut enim ad minima veniam,
                        quis exercitationem ullamco nostrud laboris nisi ut ex ea commodo aliquip consequat.
                        Dolor in reprehenderit in duis irure voluptate velit esse fugiat dolore eu nulla pariatur cillum.`

                }
            ]
        };
    }

    //* Data Set for page 2
    getDataForLayout2 = (): any => {
        return {
            'toolbarTitle': 'Big image',
            'btnNext': 'Next',
            'btnFinish': 'Finish',
            'items': [
                {
                  'backgroundImage': 'assets/imgs/background/1.jpg',
                  'title': 'Fortuitu ad aeroportus'
                },
                {
                  'backgroundImage': 'assets/imgs/background/27.jpg',
                  'title': 'Communications moderatoris'
                },
                {
                  'backgroundImage': 'assets/imgs/background/3.jpg',
                  'title': 'Hoc est exortum'
                }
            ]
        };
    }

    //* Data Set for page 3
    getDataForLayout3 = (): any => {
        return {
            'toolbarTitle': 'Big Image + Text',
            'btnNext': 'Next',
            'btnFinish': 'Finish',
            'btnSkip': 'Skip',
            'items': [
                {
                  'backgroundImage': 'assets/imgs/background/5.jpg',
                  'title': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                  'description': `Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat`
                },
                {
                  'backgroundImage': 'assets/imgs/background/6.jpg',
                  'title': 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary',
                  'description': `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`
                },
                {
                  'backgroundImage': 'assets/imgs/background/7.jpg',
                  'title': 'The generated Lorem Ipsum is therefore always free from repetition, injected humour',
                  'description': `Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                                  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem`
                }
            ]
        };
    }

    //* Data Set for page 4
    getDataForLayout4 = (): any => {
        return {
            'toolbarTitle': 'Article with Text',
            'items': [
                {
                  'backgroundImage': 'assets/imgs/background/5.jpg',
                },
                {
                  'backgroundImage': 'assets/imgs/background/6.jpg',
                },
                {
                  'backgroundImage': 'assets/imgs/background/7.jpg',
                }
            ],
            "title": "The generated Lorem Ipsum is therefore always free from repetition, injected humour",
            "description1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
            "image": "assets/imgs/background/1.jpg",
            "description2": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        };
    }

    load(item: any): Observable<any> {
        this.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('wizard/' + item.theme)
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
