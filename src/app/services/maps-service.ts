import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class MapsService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

    getTitle = (): string => 'Maps';

    getAllThemes = (): Array<any> => {
        return [
            { 'url': 'maps/0', 'title': 'GMAPS + Location  Details', 'theme': 'layout1' },
            { 'url': 'maps/1', 'title': 'GMAPS + About Us', 'theme': 'layout2' },
            { 'url': 'maps/2', 'title': 'Full Screen View', 'theme': 'layout3' }
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
            'toolbarTitle': 'GMAPS + Location  Details',
            'iconLike': 'icon-thumb-up',
            'iconFavorite': 'icon-heart',
            'iconShare': 'icon-share-variant',
            'title': 'Museum of modern art',
            'titleDescription': 'Art Boulevard, New York, USA',
            'reviews': '4.12 (78 reviews)',
            'contentTitle': 'In short',
            'contentDescription': `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Luctus semper elit platea; Velit aptent euismod pede euismod facilisis? In ultrices venenatis mauris.
             Consequat gravida pretium ligula lectus;
             Lacus natoque elit elit: Imperdiet cursus fermentum suspendisse; Cum iaculis venenatis!`,
            'iconLoacation': 'icon-map-marker-radius',
            'iconLoacationText': 'Design Street, New York, USA',
            'iconWatch': 'icon-alarm',
            'iconWatchText': '8:00 to 16:00 working days',
            'iconPhone': 'icon-phone',
            'iconPhoneText': '333 222 111',
            'iconEarth': 'icon-earth',
            'iconEarthText': 'www.csform.com',
            'iconEmail': 'icon-email-outline',
            'iconEmailText': 'dev@csform.com',
            'map': {
                'lat': 40.712562,
                'lng': -74.005911,
                'zoom': 15,
                'mapTypeControl': true,
                'streetViewControl': true
            },
            'iconsStars': [
                {
                    'iconActive': 'icon-star-outline',
                    'iconInactive': 'icon-star',
                    'isActive': true
                },
                {
                    'iconActive': 'icon-star-outline',
                    'iconInactive': 'icon-star',
                    'isActive': true
                },
                {
                    'iconActive': 'icon-star-outline',
                    'iconInactive': 'icon-star',
                    'isActive': true
                },
                {
                    'iconActive': 'icon-star-outline',
                    'iconInactive': 'icon-star',
                    'isActive': true
                },
                {
                    'iconActive': 'icon-star-outline',
                    'iconInactive': 'icon-star',
                    'isActive': false
                }
            ],

        };
    }

    //* Data Set for page 2
    getDataForLayout2 = (): any => {
        return {
            'toolbarTitle': 'GMAPS + About Us',
            'iconLike': 'icon-thumb-up',
            'iconFavorite': 'icon-heart',
            'iconShare': 'icon-share-variant',
            'title': 'Creative Studio Form',
            'titleDescription': 'Design & Development agency',
            'contentTitle': 'About us',
            'contentDescription': `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Luctus semper elit platea; Velit aptent euismod pede euismod facilisis? In ultrices venenatis mauris.
             Consequat gravida pretium ligula lectus;
              Lacus natoque elit elit: Imperdiet cursus fermentum suspendisse; Cum iaculis venenatis!`,
            'iconLoacation': 'icon-map-marker-radius',
            'iconLoacationText': 'Design Street, New York, USA',
            'iconWatch': 'icon-alarm',
            'iconWatchText': '8:00 to 16:00 working days',
            'iconPhone': 'icon-phone',
            'iconPhoneText': '333 222 111',
            'iconEarth': 'icon-earth',
            'iconEarthText': 'www.csform.com',
            'iconEmail': 'icon-email-outline',
            'iconEmailText': 'dev@csform.com',
            'titleMap': 'Here we are :',
            'map': {
                'lat': 40.712562,
                'lng': -74.005911,
                'zoom': 15,
                'mapTypeControl': true,
                'streetViewControl': true
            }
        };
    }

    //* Data Set for page 3
    getDataForLayout3 = (): any => {
        return {
            'toolbarTitle': 'Full Screen View',
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
        this.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('maps/' + item.theme)
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
