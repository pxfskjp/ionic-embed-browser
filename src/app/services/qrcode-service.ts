import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';


@Injectable({ providedIn: 'root' })
export class QRCodeService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

    getTitle = (): string => 'Scanner';

    getAllThemes = (): Array<any> => {
        return [
            { 'url': 'qrcode/0', 'title': 'Qrcode Scanner', 'theme': 'layout1' },
            { 'url': 'qrcode/1', 'title': 'Qrcode Encode', 'theme': 'layout2' }
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
    getDataForLayout1() {
        return {
            'toolbarTitle':'QRCode page'
        }
    }

    //* Data Set for page 2
    getDataForLayout2() {
        return {
            'toolbarTitle':'QRCode page',
            'title': 'Click To Generate QR Code',
            'subtitle': 'Please insert your text',
            'buttonText': 'Encode Text'
        }
    }

    load(item: any): Observable<any> {
        this.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('qrcode/' + item.theme)
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
