import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class RadioButtonService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

    getTitle = (): string => 'Radio Button';

    getAllThemes = (): Array<any> => {
        return [
            { 'url': 'radio-button/0', 'title': 'Simple', 'theme': 'layout1' },
            { 'url': 'radio-button/1', 'title': 'With avatars', 'theme': 'layout2' },
            { 'url': 'radio-button/2', 'title': 'Simple 2', 'theme': 'layout3' }
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
            'toolbarTitle': 'Simple',
            'title': 'Your country',
            'selectedItem': 3,
            'items': [
                { 'id': 1, 'title': 'Norway' },
                { 'id': 2, 'title': 'Ireland' },
                { 'id': 4, 'title': 'Slovak Republic' },
                { 'id': 3, 'title': 'Canada' },
                { 'id': 5, 'title': 'United Kingdom' },
                { 'id': 6, 'title': 'Philippines' },
                { 'id': 7, 'title': 'Italy' },
                { 'id': 8, 'title': 'Brazil' },
                { 'id': 9, 'title': 'Russian Federation' },
                { 'id': 10, 'title': 'Mexico' },
                { 'id': 11, 'title': 'Cyprus' },
                { 'id': 12, 'title': 'Czech Republic' },
                { 'id': 13, 'title': 'Austria' }
            ]
        };
    }

    //* Data Set for page 2
    getDataForLayout2 = (): any => {
        return {
            'toolbarTitle': 'With avatars',
            'title': 'Following',
            'selectedItem': 4,
            'items': [
                { 'id': 1, 'title': 'Grant Marshall', 'subtitle': 'marshall@yahoo.com', 'avatar': 'assets/imgs/avatar/0.jpg' },
                { 'id': 2, 'title': 'Jessica Miles', 'subtitle': 'miles@mail.com', 'avatar': 'assets/imgs/avatar/1.jpg' },
                { 'id': 4, 'title': 'Natasha Gamble', 'subtitle': 'gamble@outlook.com', 'avatar': 'assets/imgs/avatar/2.jpg' },
                { 'id': 3, 'title': 'Holman Valencia', 'subtitle': 'valencia@outlook.com', 'avatar': 'assets/imgs/avatar/3.jpg' },
                { 'id': 5, 'title': 'Prince Phelps', 'subtitle': 'phelps@gmail.com', 'avatar': 'assets/imgs/avatar/4.jpg' },
                { 'id': 6, 'title': 'Perry Bradley', 'subtitle': 'bradley@outlook.com', 'avatar': 'assets/imgs/avatar/5.jpg' },
                { 'id': 7, 'title': 'Fitzgerald Stanton', 'subtitle': 'stanton@mail.com', 'avatar': 'assets/imgs/avatar/6.jpg' },
                { 'id': 8, 'title': 'Byrd Hewitt', 'subtitle': 'hewitt@outlook.com', 'avatar': 'assets/imgs/avatar/7.jpg' },
                { 'id': 9, 'title': 'Barbara Bernard', 'subtitle': 'bernard@yahoo.com', 'avatar': 'assets/imgs/avatar/8.jpg' },
                { 'id': 10, 'title': 'Cline Lindsay', 'subtitle': 'lindsay@gmail.com', 'avatar': 'assets/imgs/avatar/9.jpg' }
            ]
        };
    }

    //* Data Set for page 3
    getDataForLayout3 = (): any => {
        return {
            'toolbarTitle': 'Simple 2',
            'title': 'Loctions',
            'selectedItem': 4,
            'items': [
                { 'id': 1, 'title': 'Dunbar', 'subtitle': 'Bangladesh' },
                { 'id': 2, 'title': 'Motley', 'subtitle': 'Kuwait' },
                { 'id': 4, 'title': 'Boonville', 'subtitle': 'Mexico' },
                { 'id': 3, 'title': 'Chesapeake', 'subtitle': 'Netherlands Antilles' },
                { 'id': 5, 'title': 'Sanders', 'subtitle': 'Liechtenstein' },
                { 'id': 6, 'title': 'Bath', 'subtitle': 'Finland' },
                { 'id': 7, 'title': 'Holtville', 'subtitle': 'Greenland' },
                { 'id': 8, 'title': 'Indio', 'subtitle': 'Brazi' },
                { 'id': 9, 'title': 'Cazadero', 'subtitle': 'United Kingdom' },
                { 'id': 10, 'title': 'Bridgetown', 'subtitle': 'Poland' },
                { 'id': 11, 'title': 'Fowlerville', 'subtitle': 'Micronesia' },
                { 'id': 12, 'title': 'Enlow', 'subtitle': 'Congo' },
                { 'id': 13, 'title': 'Marne', 'subtitle': 'Chile' }
            ]
        };
    }

    load(item: any): Observable<any> {
        this.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('radioButton/' + item.theme)
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
