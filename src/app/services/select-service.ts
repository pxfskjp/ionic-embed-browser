import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class SelectService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

    getTitle = (): string => 'Select';

    getAllThemes = (): Array<any> => {
        return [
            { 'url': 'select/0', 'title': 'Single Select', 'theme': 'layout1' },
            { 'url': 'select/1', 'title': 'Multi Select', 'theme': 'layout2' }
        ];
    }

    //* Data Set for page 1
    getDataForTheme = (menuItem: any): any => {
        return {
            'title': 'Select',
            'layout1': {
                'headerTitle': 'Single Select',
                'title': 'City',
                'selectedItem': 12,
                'header': 'Basic dialog',
                'items': [
                    {
                        'id': 12,
                        'title': 'New York'
                    },
                    {
                        'id': 14,
                        'title': 'Paris'
                    },
                    {
                        'id': 13,
                        'title': 'Amsterdam'
                    },
                    {
                        'id': 15,
                        'title': 'Gotham City'
                    }
                ]
            },
            'layout2': {
                'headerTitle': 'Single Select',
                'title': 'Country',
                'header': 'One touch dialog',
                'selectedItem': 22,
                'items': [
                    {
                        'id': 22,
                        'title': 'USA'
                    },
                    {
                        'id': 24,
                        'title': 'France'
                    },
                    {
                        'id': 23,
                        'title': 'Netherland'
                    },
                    {
                        'id': 25,
                        'title': 'Gothamland'
                    }
                ]
            },
            'layout3': {
                'headerTitle': 'Single Select',
                'title': 'Address',
                'header': 'With Action sheet',
                'selectedItem': 31,
                'items': [
                    {
                        'id': 31,
                        'title': 'Choose address'
                    },
                    {
                        'id': 32,
                        'title': '222 Duffield Street'
                    },
                    {
                        'id': 34,
                        'title': '198 Clark Street'
                    },
                    {
                        'id': 33,
                        'title': '588 Kenmore Terrace'
                    }
                ]
            },
            'layout4': {
                'headerTitle': 'Multi Select',
                'title': 'Date',
                'header': 'Two option select',
                'selectedItemMonth': 38,
                'selectedItemYear': 50,
                'itemsMonth': [
                    {
                        'id': 38,
                        'title': 'January'
                    },
                    {
                        'id': 39,
                        'title': 'February'
                    },
                    {
                        'id': 40,
                        'title': 'March'
                    },
                    {
                        'id': 41,
                        'title': 'April'
                    },
                    {
                        'id': 42,
                        'title': 'May'
                    },
                    {
                        'id': 43,
                        'title': 'June'
                    },
                    {
                        'id': 44,
                        'title': 'July'
                    },
                    {
                        'id': 45,
                        'title': 'August'
                    },
                    {
                        'id': 46,
                        'title': 'September'
                    },
                    {
                        'id': 47,
                        'title': 'October'
                    },
                    {
                        'id': 48,
                        'title': 'November'
                    },
                    {
                        'id': 49,
                        'title': 'December'
                    }
                ],
                'itemsYears': [
                    {
                        'id': 50,
                        'title': '2009'
                    },
                    {
                        'id': 51,
                        'title': '2010'
                    },
                    {
                        'id': 52,
                        'title': '2011'
                    },
                    {
                        'id': 53,
                        'title': '2012'
                    },
                    {
                        'id': 54,
                        'title': '2013'
                    },
                    {
                        'id': 55,
                        'title': '2014'
                    },
                    {
                        'id': 56,
                        'title': '2015'
                    },
                    {
                        'id': 57,
                        'title': '2016'
                    },
                    {
                        'id': 58,
                        'title': '2017'
                    }
                ]
            },
            'layout5': {
                'headerTitle': 'Single Select',
                'title': 'Country',
                'header': 'One touch dialog',
                'selectedItem': 22,
                'items': [
                    {
                        'id': 22,
                        'title': 'USA'
                    },
                    {
                        'id': 24,
                        'title': 'France'
                    },
                    {
                        'id': 23,
                        'title': 'Netherland'
                    },
                    {
                        'id': 25,
                        'title': 'Gothamland'
                    }
                ]
            },
            'layout6': {
                'headerTitle': 'Multi Select',
                'title': 'Date',
                'header': 'Two option select',
                'selectedItemMonth': 38,
                'selectedItemYear': 50,
                'itemsMonth': [
                    {
                        'id': 38,
                        'title': 'January'
                    },
                    {
                        'id': 39,
                        'title': 'February'
                    },
                    {
                        'id': 40,
                        'title': 'March'
                    },
                    {
                        'id': 41,
                        'title': 'April'
                    },
                    {
                        'id': 42,
                        'title': 'May'
                    },
                    {
                        'id': 43,
                        'title': 'June'
                    },
                    {
                        'id': 44,
                        'title': 'July'
                    },
                    {
                        'id': 45,
                        'title': 'August'
                    },
                    {
                        'id': 46,
                        'title': 'September'
                    },
                    {
                        'id': 47,
                        'title': 'October'
                    },
                    {
                        'id': 48,
                        'title': 'November'
                    },
                    {
                        'id': 49,
                        'title': 'December'
                    }
                ],
                'itemsYears': [
                    {
                        'id': 50,
                        'title': '2009'
                    },
                    {
                        'id': 51,
                        'title': '2010'
                    },
                    {
                        'id': 52,
                        'title': '2011'
                    },
                    {
                        'id': 53,
                        'title': '2012'
                    },
                    {
                        'id': 54,
                        'title': '2013'
                    },
                    {
                        'id': 55,
                        'title': '2014'
                    },
                    {
                        'id': 56,
                        'title': '2015'
                    },
                    {
                        'id': 57,
                        'title': '2016'
                    },
                    {
                        'id': 58,
                        'title': '2017'
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
                    .object('select')
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
