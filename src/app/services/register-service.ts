import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class RegisterService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

    getTitle = (): string => 'Register pages';

    getAllThemes = (): Array<any> => {
        return [
            { 'url': 'register/0', 'title': 'Register + logo 1', 'theme': 'layout1' },
            { 'url': 'register/1', 'title': 'Register + logo 2', 'theme': 'layout2' }
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
            'toolbarTitle': 'Register + logo 1',
            'logo': 'assets/imgs/logo/login.png',
            'register': 'Register',
            'username': 'Username',
            'city': 'City',
            'country': 'Country',
            'password': 'Password',
            'email': 'Email',
            'usernamePlaceholder': 'Your Username',
            'cityPlaceholder': 'Your City',
            'countryPlaceholder': 'Your Country',
            'passwordPlaceholder': 'Your Password',
            'emailPlaceholder': 'Your Email',
            'button': 'Register',
            'skip': 'Skip'
        };
    }

    //* Data Set for page 2
    getDataForLayout2 = (): any => {
        return {
            'toolbarTitle': 'Register + logo 2',
            'logo': 'assets/imgs/logo/login-2.png',
            'iconAccount': 'icon-account',
            'username': 'Username',
            'iconHome': 'icon-home-variant',
            'iconCity': 'icon-city',
            'usernamePlaceholder': 'Your Username',
            'cityPlaceholder': 'Your City',
            'countryPlaceholder': 'Your Country',
            'passwordPlaceholder': 'Your Password',
            'emailPlaceholder': 'Your Email',
            'city': 'City',
            'iconWeb': 'icon-web',
            'country': 'Country',
            'iconLock': 'icon-lock',
            'password': 'Password',
            'iconEmail': 'icon-email-outline',
            'email': 'Email',
            'submit': 'submit',
        };
    }

    load(item: any): Observable<any> {
        this.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('register/' + item.theme)
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
