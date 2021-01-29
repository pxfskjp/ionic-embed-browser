import { IService } from './IService';
import { NavController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class SplashScreenService implements IService {

    constructor(private loadingService: LoadingService) { }

    getTitle = (): string => 'Splash screens';

    getAllThemes = (): Array<any> => {
        return [
            { 'url': 'splash-screens/0', 'title': 'Fade in + Ken Burns 1', 'theme': 'layout1' },
            { 'url': 'splash-screens/1', 'title': 'Down + fade in', 'theme': 'layout2' },
            { 'url': 'splash-screens/2', 'title': 'Down + Ken Burns', 'theme': 'layout3' }
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
            'headerTitle': 'Fade in + Ken Burns 1',
            'duration': 3000,
            'backgroundImage': 'assets/imgs/background/29.jpg',
            'logo': 'assets/imgs/logo/login.png',
            'title': ''
        };
    }

    //* Data Set for page 2
    getDataForLayout2 = (): any => {
        return {
            'headerTitle': 'Down + fade in + Ken Burns',
            'duration': 3000,
            'backgroundImage': 'assets/imgs/background/29.jpg',
            'logo': 'assets/imgs/logo/login.png',
            'title': 'IONIC 4 CSFORM'
        };
    }

    //* Data Set for page 3
    getDataForLayout3 = (): any => {
        return {
            'headerTitle': 'Down + Ken Burns',
            'duration': 4000,
            'backgroundImage': 'assets/imgs/background/31.jpg',
            'logo': 'assets/imgs/logo/login-3.png',
            'title': 'IONICTEMPLATE'
        };
    }

    load(item: any): Observable<any> {
        this.loadingService.show();
        return new Observable(observer => {
            this.loadingService.hide();
            observer.next(this.getDataForTheme(item));
            observer.complete();
        });
    }
}
