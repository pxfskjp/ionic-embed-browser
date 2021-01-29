import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { ToastService } from './toast-service';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class FormService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

    getTitle = (): string => 'Form';

    getAllThemes = (): Array<any> => {
        return [
            { 'url': 'form/0', 'title': 'Form + Write Comment', 'theme': 'layout1' },
            { 'url': 'form/1', 'title': 'Form + Write Review', 'theme': 'layout2' },
            { 'url': 'form/2', 'title': 'Form With Address', 'theme': 'layout3' },
            { 'url': 'form/3', 'title': 'Form With Location', 'theme': 'layout4' }
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
            'toolbarTitle': 'Form + Write Comment',
            'yourName': 'Your Name',
            'title': 'Title',
            'description': 'Enter a description',
            'button': ' Write Comment'
        };
    }

    //* Data Set for page 2
    getDataForLayout2 = (): any => {
        return {
            'toolbarTitle': 'Form + Write Review',
            'title': 'Your Name',
            'rateTitle': 'Rate',
            'descriptionPlaceholder': 'Description',
            'btnSubmit': 'Write Comment',
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
        };
    }

    //* Data Set for page 3
    getDataForLayout3 = (): any => {
        return {
            'toolbarTitle': 'Form With Address',
            'firstName': 'Firs Name',
            'lastName': 'Last Name',
            'addressLine1': 'Address Line 1',
            'addressLine2': 'Address Line 2',
            'city': 'City',
            'zipCode': 'Zip Code',
            'button': 'Write Comment'

        };
    }

    //* Data Set for page 4
    getDataForLayout4 = (): any => {
        return {
            'toolbarTitle': 'Form With Location',
            'descriptionPlaceholder': 'Description',
            'btnSubmit': 'Write Comment',
            'map': {
                'lat': 40.712562,
                'lng': -74.005911,
                'zoom': 15,
                'mapTypeControl': true,
                'streetViewControl': true
            }
        };
    }

    load(item: any): Observable<any> {
        const that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('form/' + item.theme)
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
