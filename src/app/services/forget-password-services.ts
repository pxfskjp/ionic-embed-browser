import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' }) export class ForgetPasswordService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

    getTitle = (): string => 'Forget passworsd pages';

    getAllThemes = (): Array<any> => {
        return [
            { 'url': 'forgot-password/0', 'title': 'Forget Password Simple', 'theme': 'layout1' },
            { 'url': 'forgot-password/1', 'title': 'Forget Password With Background', 'theme': 'layout2' }
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
            'toolbarTitle': 'Forget Password Simple',
            'title': 'Forgot Your Password',
            'subtitle': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'lableEmail': 'E-MAIL',
            'email': 'Your e-mail address',
            'send': 'Send',
            'logo': 'assets/imgs/logo/login-2.png',
            'errorIcon': 'remove-circle'
        };
    }

    //* Data Set for page 2
    getDataForLayout2 = (): any => {
        return {
            'toolbarTitle': 'Forget Password With Background',
            'background': 'assets/imgs/background/29.jpg',
            'title': 'Forgot Your Password',
            'subtitle': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'lableEmail': 'E-MAIL',
            'email': 'Your e-mail address',
            'send': 'Send',
            'logo': 'assets/imgs/logo/login.png',
            'errorIcon': 'remove-circle'
        };
    }

    load(item: any): Observable<any> {
        this.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                debugger
                this.af
                    .object('forgetPassword/' + item.theme)
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
