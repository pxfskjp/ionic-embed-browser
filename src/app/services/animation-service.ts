import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class AnimationService implements IService {

  constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

  getTitle = (): string => 'Animation';

  getAllThemes = (): Array<any> => {
    return [
      { 'url': 'animation/0', 'title': 'FadeIn Up', 'theme': 'layout1' },
      { 'url': 'animation/1', 'title': 'FadeIn Left', 'theme': 'layout2' },
      { 'url': 'animation/2', 'title': 'BounceIn', 'theme': 'layout3' },
      { 'url': 'animation/3', 'title': 'ZoomIn', 'theme': 'layout4' },
      { 'url': 'animation/4', 'title': 'BounceIn Left', 'theme': 'layout5' },
      { 'url': 'animation/5', 'title': 'FadeIn', 'theme': 'layout6' },
      { 'url': 'animation/6', 'title': 'BounceIn Right', 'theme': 'layout7' },
      { 'url': 'animation/7', 'title': 'SlideIn Left', 'theme': 'layout8' },
      { 'url': 'animation/8', 'title': 'SlideIn Up', 'theme': 'layout9' },
      { 'url': 'animation/9', 'title': 'FadeIn Right', 'theme': 'layout10' }

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
      'toolbarTitle': 'FadeIn Up',
      'items':[
        {
          'id': 1,
          'title': 'Song',
          'icon': '',
          'favorite': false,
          'image': ''
        },
        {
          'id': 2,
          'title': 'Album',
          'icon': '',
          'favorite': false,
          'image': ''
        },
        {
          'id': 3,
          'title': 'Artist',
          'icon': '',
          'favorite': false,
          'image': ''
        },
        {
          'id': 4,
          'title': 'Song',
          'icon': '',
          'favorite': true,
          'image': ''
        },
        {
          'id': 5,
          'title': 'Album',
          'icon': '',
          'favorite': false,
          'image': ''
        },
        {
          'id': 6,
          'title': 'Artist',
          'icon': '',
          'favorite': false,
          'image': ''
        },
        {
          'id': 7,
          'title': 'Song',
          'icon': '',
          'favorite': false,
          'image': ''
        },
        {
          'id': 8,
          'title': 'Album',
          'icon': '',
          'favorite': false,
          'image': ''
        },
        {
          'id': 9,
          'title': 'Artist',
          'icon': '',
          'favorite': false,
          'image': ''
        },
        {
          'id': 10,
          'title': 'Song',
          'icon': '',
          'favorite': true,
          'image': ''
        },
        {
          'id': 11,
          'title': 'Album',
          'icon': '',
          'favorite': false,
          'image': ''
        },
        {
          'id': 12,
          'title': 'Artist',
          'icon': '',
          'favorite': false,
          'image': ''
        },
        {
          'id': 13,
          'title': 'Artist',
          'icon': '',
          'favorite': false,
          'image': ''
        },
        {
          'id': 14,
          'title': 'Song',
          'icon': '',
          'favorite': false,
          'image': ''
        },
        {
          'id': 15,
          'title': 'Album',
          'icon': '',
          'favorite': false,
          'image': ''
        },
        {
          'id': 16,
          'title': 'Artist',
          'icon': '',
          'favorite': false,
          'image': ''
        },
        {
          'id': 17,
          'title': 'Song',
          'icon': '',
          'favorite': true,
          'image': ''
        },
        {
          'id': 18,
          'title': 'Album',
          'icon': '',
          'favorite': false,
          'image': ''
        },
        {
          'id': 19,
          'title': 'Artist',
          'icon': '',
          'favorite': false,
          'image': ''
        }
      ]
    }
  }

    //* Data Set for page 2
    getDataForLayout2 = (): any => {
      return {
        'toolbarTitle': 'FadeIn Left',
        'title': 'Order No. 1',
        'description': 'Will be shipped: 15.5.2016.',
        'buttonText': 'PROCEED',
        'headerImage': 'assets/imgs/background/17.jpg',
        'price': '$42.99',
        'items': [
            {
                'id': 1,
                'title': 'Black Shirt',
                'seller': 'Seller Name',
                'image': 'assets/imgs/avatar/17.jpg',
                'oldPrice': '$42.99',
                'shipping': 'free shipping',
                'newPrice': '$35.99'
            },
            {
                'id': 2,
                'title': 'Black Sweater',
                'seller': 'Seller Name',
                'image': 'assets/imgs/avatar/18.jpg',
                'oldPrice': '$42.99',
                'shipping': 'free shipping',
                'newPrice': '$35.99'
            },
            {
                'id': 3,
                'title': 'Shirt',
                'seller': 'Seller Name',
                'image': 'assets/imgs/avatar/19.jpg',
                'oldPrice': '$42.99',
                'shipping': 'free shipping',
                'newPrice': '$35.99'
            },
            {
                'id': 4,
                'title': 'White Shirt',
                'seller': 'Seller Name',
                'image': 'assets/imgs/avatar/20.jpg',
                'oldPrice': '$42.99',
                'shipping': 'free shipping',
                'newPrice': '$35.99'
            },
            {
                'id': 5,
                'title': 'White T shirt',
                'seller': 'Seller Name',
                'image': 'assets/imgs/avatar/21.jpg',
                'oldPrice': '$42.99',
                'shipping': 'free shipping',
                'newPrice': '$35.99'
            },
            {
                'id': 6,
                'title': 'T shirt',
                'seller': 'Seller Name',
                'image': 'assets/imgs/avatar/22.jpg',
                'oldPrice': '$42.99',
                'shipping': 'free shipping',
                'newPrice': '$35.99'
            },
            {
                'id': 7,
                'title': 'Hoodies',
                'seller': 'Seller Name',
                'image': 'assets/imgs/avatar/23.jpg',
                'oldPrice': '$42.99',
                'shipping': 'free shipping',
                'newPrice': '$35.99'
            }
        ]
    };
    }

      //* Data Set for page 3
  getDataForLayout3 = (): any => {
    return {
      'toolbarTitle' : 'BounceIn',
      'title': 'PlaylistName',
      'description': 'Author:Username',
      'duration': '35:72',
      'items': [
          {
              'id': 1,
              'title': 'Jessica Miles',
              'image': 'assets/imgs/avatar/0.jpg',
              'description': 'Birth year: 1984',
              'shortDescription': 'Country: Germany',
              'longDescription': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
              'iconLike': 'icon-thumb-up',
              'iconFavorite': 'icon-heart',
              'iconShare': 'icon-share-variant'
          },
          {
              'id': 2,
              'title': 'Natasha Gamble',
              'image': 'assets/imgs/avatar/1.jpg',
              'description': 'Birth year: 1980',
              'shortDescription': 'Country: Germany',
              'longDescription': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
              'iconLike': 'icon-thumb-up',
              'iconFavorite': 'icon-heart',
              'iconShare': 'icon-share-variant'
          },
          {
              'id': 3,
              'title': 'Julia Petersen',
              'image': 'assets/imgs/avatar/2.jpg',
              'description': 'Birth year: 1984',
              'shortDescription': 'Country: Germany',
              'longDescription': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
              'iconLike': 'icon-thumb-up',
              'iconFavorite': 'icon-heart',
              'iconShare': 'icon-share-variant'
          },
          {
              'id': 4,
              'title': 'Marisa Cain',
              'image': 'assets/imgs/avatar/3.jpg',
              'description': 'Birth year: 1984',
              'shortDescription': 'Country: Germany',
              'longDescription': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
              'iconLike': 'icon-thumb-up',
              'iconFavorite': 'icon-heart',
              'iconShare': 'icon-share-variant'
          },
          {
              'id': 5,
              'title': 'Lara Lynn',
              'image': 'assets/imgs/avatar/4.jpg',
              'description': 'Birth year: 1984',
              'shortDescription': 'Country: Germany',
              'longDescription': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
              'iconLike': 'icon-thumb-up',
              'iconFavorite': 'icon-heart',
              'iconShare': 'icon-share-variant'
          },
          {
              'id': 6,
              'title': 'Megan Singleton',
              'image': 'assets/imgs/avatar/5.jpg',
              'description': 'Birth year: 1984',
              'shortDescription': 'Country: Germany',
              'longDescription': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
              'iconLike': 'icon-thumb-up',
              'iconFavorite': 'icon-heart',
              'iconShare': 'icon-share-variant'
          },
          {
              'id': 7,
              'title': 'Susanna Simmons',
              'image': 'assets/imgs/avatar/6.jpg',
              'description': 'Birth year: 1984',
              'shortDescription': 'Country: Germany',
              'longDescription': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
              'iconLike': 'icon-thumb-up',
              'iconFavorite': 'icon-heart',
              'iconShare': 'icon-share-variant'
          },
          {
              'id': 8,
              'title': 'Juliette Medina',
              'image': 'assets/imgs/avatar/7.jpg',
              'description': 'Birth year: 1984',
              'shortDescription': 'Country: Germany',
              'longDescription': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
              'iconLike': 'icon-thumb-up',
              'iconFavorite': 'icon-heart',
              'iconShare': 'icon-share-variant'
          }
      ]
    };
  }

    //* Data Set for page 4
    getDataForLayout4 = (): any => {
      return {
        'toolbarTitle' : 'ZoomIn',
        'items': [
            {
                'id': 1,
                'title': 'Fortuitu ad aeroportus',
                'titleHeader': 'Simul quanta praecinctionis',
                'description': `Contra opinione vulgi, accumsan non tantum temere text.
                Quod habet radices in fragmen literaturam Romanam classicam a XLV BC, MM facit super annos. Richard McClintock`,
                'image': 'assets/imgs/background/1.jpg',
                'button': 'EXPLORE',
                'shareButton': 'SHARE'
            },
            {
                'id': 2,
                'title': 'Hoc est exortum',
                'titleHeader': 'Pedestres sub imprudentia contentum',
                'description': `Contra opinione vulgi, accumsan non tantum temere text.
                Quod habet radices in fragmen literaturam Romanam classicam a XLV BC, MM facit super annos. Richard McClintock`,
                'image': 'assets/imgs/background/2.jpg',
                'button': 'EXPLORE',
                'shareButton': 'SHARE'
            },
            {
                'id': 3,
                'title': 'Communications moderatoris',
                'titleHeader': 'Technica et Internet habeat facultatem',
                'description': `Contra opinione vulgi, accumsan non tantum temere text.
                Quod habet radices in fragmen literaturam Romanam classicam a XLV BC, MM facit super annos. Richard McClintock`,
                'image': 'assets/imgs/background/5.jpg',
                'button': 'EXPLORE',
                'shareButton': 'SHARE'
            },
            {
                'id': 4,
                'title': 'Tabulas scripto munus agere providere',
                'titleHeader': 'Ut adeptus est atrium',
                'description': `Contra opinione vulgi, accumsan non tantum temere text.
                Quod habet radices in fragmen literaturam Romanam classicam a XLV BC, MM facit super annos. Richard McClintock`,
                'image': 'assets/imgs/background/3.jpg',
                'button': 'EXPLORE',
                'shareButton': 'SHARE'
            },
            {
                'id': 5,
                'title': 'In outpatient nuntiatum ministerium',
                'titleHeader': 'Testis unus',
                'description': `Contra opinione vulgi, accumsan non tantum temere text.
                Quod habet radices in fragmen literaturam Romanam classicam a XLV BC, MM facit super annos. Richard McClintock`,
                'image': 'assets/imgs/background/1.jpg',
                'button': 'EXPLORE',
                'shareButton': 'SHARE'
            }
        ]
    };
    }

      //* Data Set for page 5
  getDataForLayout5 = (): any => {
    return {
      'toolbarTitle': 'BounceIn Left',
      'items': [
          {
              'id': 1,
              'title': 'Black Shirt',
              'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              'image': 'assets/imgs/avatar/17.jpg',
              'oldPrice': '$42.99',
              'newPrice': '$35.99',
          },
          {
              'id': 2,
              'title': 'Black Sweater',
              'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              'image': 'assets/imgs/avatar/18.jpg',
              'oldPrice': '$42.99',
              'newPrice': '$35.99',
          },
          {
              'id': 3,
              'title': 'Shirt',
              'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              'image': 'assets/imgs/avatar/19.jpg',
              'oldPrice': '$42.99',
              'newPrice': '$35.99',
          },
          {
              'id': 4,
              'title': 'White Shirt',
              'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              'image': 'assets/imgs/avatar/20.jpg',
              'oldPrice': '$42.99',
              'newPrice': '$35.99',
          },
          {
              'id': 5,
              'title': 'White T shirt',
              'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              'image': 'assets/imgs/avatar/21.jpg',
              'oldPrice': '$42.99',
              'newPrice': '$35.99',
          },
          {
              'id': 6,
              'title': 'T shirt',
              'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              'image': 'assets/imgs/avatar/22.jpg',
              'oldPrice': '$42.99',
              'newPrice': '$35.99',
          },
          {
              'id': 7,
              'title': 'Hoodies',
              'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              'image': 'assets/imgs/avatar/23.jpg',
              'oldPrice': '$42.99',
              'newPrice': '$35.99',
          },
          {
              'id': 8,
              'title': 'Sweater',
              'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              'image': 'assets/imgs/avatar/17.jpg',
              'oldPrice': '$42.99',
              'newPrice': '$35.99',
          },
          {
              'id': 9,
              'title': 'White Sweater',
              'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              'image': 'assets/imgs/avatar/18.jpg',
              'oldPrice': '$42.99',
              'newPrice': '$35.99',
          }
      ]
    }
  }

    //* Data Set for page 6
    getDataForLayout6 = (): any => {
      return {
        'toolbarTitle' : 'FadeIn',
        'items': [
            {
                'id': 1,
                'image': 'assets/imgs/background/0.jpg',
                'title': 'Women in the Slaves',
                'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`
            },
            {
                'id': 2,
                'image': 'assets/imgs/background/1.jpg',
                'title': 'Women in the Slaves',
                'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`
            },
            {
                'id': 3,
                'image': 'assets/imgs/background/2.jpg',
                'title': 'Women in the Slaves',
                'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`
            },
            {
                'id': 4,
                'image': 'assets/imgs/background/3.jpg',
                'title': 'Women in the Slaves',
                'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`
            },
            {
                'id': 5,
                'image': 'assets/imgs/background/4.jpg',
                'title': 'Women in the Slaves',
                'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`
            },
            {
                'id': 6,
                'image': 'assets/imgs/background/5.jpg',
                'title': 'Women in the Slaves',
                'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`
            }
        ]
      }
    }

      //* Data Set for page 7
  getDataForLayout7 = (): any => {
    return {
      'toolbarTitle': 'BounceIn Right',
      'items':[
        {
          'id': 1,
          'title': 'Vanessa Ryan',
          'image': 'assets/imgs/avatar/1.jpg'
        },
        {
          'id': 2,
          'title': 'Lara Lynn',
          'image': 'assets/imgs/avatar/2.jpg'
        },
        {
          'id': 3,
          'title': 'Gayle Gaines',
          'image': 'assets/imgs/avatar/3.jpg'
        },
        {
          'id': 4,
          'title': 'Barbara Bernard',
          'image': 'assets/imgs/avatar/4.jpg'
        },
        {
          'id': 5,
          'title': 'Josefa Gardner',
          'image': 'assets/imgs/avatar/5.jpg'
        },
        {
          'id': 6,
          'title': 'Juliette Medina',
          'image': 'assets/imgs/avatar/6.jpg'
        },
        {
          'id': 7,
          'title': 'Vanessa Ryan',
          'image': 'assets/imgs/avatar/1.jpg'
        },
        {
          'id': 8,
          'title': 'Lara Lynn',
          'image': 'assets/imgs/avatar/2.jpg'
        },
        {
          'id': 9,
          'title': 'Gayle Gaines',
          'image': 'assets/imgs/avatar/3.jpg'
        },
        {
          'id': 10,
          'title': 'Barbara Bernard',
          'image': 'assets/imgs/avatar/4.jpg'
        },
        {
          'id': 11,
          'title': 'Josefa Gardner',
          'image': 'assets/imgs/avatar/5.jpg'
        },
        {
          'id': 12,
          'title': 'Juliette Medina',
          'image': 'assets/imgs/avatar/6.jpg'
        },
        {
          'id': 13,
          'title': 'Vanessa Ryan',
          'image': 'assets/imgs/avatar/1.jpg'
        },
        {
          'id': 14,
          'title': 'Lara Lynn',
          'image': 'assets/imgs/avatar/2.jpg'
        },
        {
          'id': 15,
          'title': 'Gayle Gaines',
          'image': 'assets/imgs/avatar/3.jpg'
        },
        {
          'id': 16,
          'title': 'Barbara Bernard',
          'image': 'assets/imgs/avatar/4.jpg'
        },
        {
          'id': 17,
          'title': 'Josefa Gardner',
          'image': 'assets/imgs/avatar/5.jpg'
        },
        {
          'id': 18,
          'title': 'Juliette Medina',
          'image': 'assets/imgs/avatar/6.jpg'
        }
      ]
    }
  }

    //* Data Set for page 8
    getDataForLayout8 = (): any => {
      return {
        'toolbarTitle': 'SlideIn Left',
        'allComments': '2121 Comments',
        'items': [
            {
                'id': 1,
                'image': 'assets/imgs/avatar/16.jpg',
                'title': 'Erica Romaguera',
                'time': '18 August 2018 at 12:20pm',
                'description': 'If you could have any kind of pet, what would you choose?'
            },
            {
                'id': 2,
                'image': 'assets/imgs/avatar/15.jpg',
                'title': 'Caleigh Jerde',
                'time': '18 August 2018 at 8:13pm',
                'description': 'If you could learn any language, what would you choose?'
            },
            {
                'id': 3,
                'image': 'assets/imgs/avatar/14.jpg',
                'title': 'Lucas Schultz',
                'time': '18 August 2018 at 5:22pm',
                'description': 'Life is about making an impact, not making an income.'
            },
            {
                'id': 4,
                'image': 'assets/imgs/avatar/13.jpg',
                'title': 'Carole Marvin',
                'time': '18 August 2018 at 7:36am',
                'description': `I\’ve learned that people will forget what you said,
                 people will forget what you did, but people will never forget how you made them feel`
            },
            {
                'id': 5,
                'image': 'assets/imgs/avatar/12.jpg',
                'title': 'Doriana Feeney',
                'time': '18 August 2018 at 5:28am',
                'description': 'Definiteness of purpose is the starting point of all achievement.'
            },
            {
                'id': 6,
                'image': 'assets/imgs/avatar/11.jpg',
                'title': 'Nia Gutkowski',
                'time': '18 August 2018 at 11:27pm',
                'description': 'Life is what happens to you while you’re busy making other plans'
            }
        ]
      }
    }

      //* Data Set for page 9
  getDataForLayout9 = (): any => {
    return {
      'toolbarTitle': 'SlideIn Up',
      'image': 'assets/imgs/avatar/21.jpg',
      'title': 'Carolyn Guerrero',
      'subtitle': 'Extreme coffee lover. Twitter maven. Internet practitioner. Beeraholic.',
      'category': 'populary',
      'followers': 'Followers',
      'valueFollowers': '439',
      'following': 'Following',
      'valueFollowing': '297',
      'posts': 'Posts',
      'valuePosts': '43',
      'items': [
          {
              'id': 1,
              'category': 'architecture news in Building',
              'backgroundCard': 'assets/imgs/background/15.jpg',
              'title': 'International Design Museum of China',
              'like': {
                  'icon': 'heart',
                  'text': 'Like',
                  'isActive': true
              },
              'comment': {
                  'icon': 'chatbubbles',
                  'number': '4',
                  'text': 'Comments',
                  'isActive': false
              }
          },
          {
              'id': 2,
              'category': 'architecture news in Building',
              'backgroundCard': 'assets/imgs/background/21.jpg',
              'title': 'Just because a building looks ugly',
              'like': {
                  'icon': 'heart',
                  'text': 'Like',
                  'isActive': true
              },
              'comment': {
                  'icon': 'chatbubbles',
                  'number': '4',
                  'text': 'Comments',
                  'isActive': false
              }
          },
          {
              'id': 3,
              'category': 'bridge architecture and design',
              'backgroundCard': 'assets/imgs/background/14.jpg',
              'title': 'world\'s longest sea bridge',
              'like': {
                  'icon': 'heart',
                  'text': 'Like',
                  'isActive': true
              },
              'comment': {
                  'icon': 'chatbubbles',
                  'number': '4',
                  'text': 'Comments',
                  'isActive': false
              }
          }
      ]
    }
  }

    //* Data Set for page 10
    getDataForLayout10 = (): any => {
      return {
        'toolbarTitle': 'FadeIn Right',
        'headerImage': 'assets/imgs/background/14.jpg',
        'toolBarTitle': 'Parallax-title',
        'title': 'Playlist Name',
        'iconLike': 'icon-thumb-up',
        'iconFavorite': 'icon-heart',
        'iconShare': 'icon-share-variant',
        'items': [
            {
                'id': 1,
                'title': 'Friends Of Midnight',
                'description': 'Graciela Mitchell',
                'image': 'assets/imgs/avatar/0.jpg',
                'imageAlt': 'avatar',
                'icon': 'icon-cloud-download',
                'duration': '3:42'
            },
            {
                'id': 2,
                'title': 'Home Of Yesterday',
                'description': 'Sherry Hale',
                'image': 'assets/imgs/avatar/1.jpg',
                'imageAlt': 'avatar',
                'icon': 'icon-cloud-download',
                'duration': '3:42'
            },
            {
                'id': 3,
                'title': 'Kiss My Friends',
                'description': 'Shawna Norman',
                'image': 'assets/imgs/avatar/2.jpg',
                'imageAlt': 'avatar',
                'icon': 'icon-cloud-download',
                'duration': '3:42'
            },
            {
                'id': 4,
                'title': 'Talk About His Right',
                'description': 'Gail Harrington',
                'image': 'assets/imgs/avatar/3.jpg',
                'imageAlt': 'avatar',
                'icon': 'icon-cloud-download',
                'duration': '3:42'
            },
            {
                'id': 5,
                'title': 'Boring Dreams',
                'description': 'Tricia Yang',
                'image': 'assets/imgs/avatar/4.jpg',
                'imageAlt': 'avatar',
                'icon': 'icon-cloud-download',
                'duration': '3:42'
            },
            {
                'id': 6,
                'title': 'Lazy Song',
                'description': 'Ines Campbell',
                'image': 'assets/imgs/avatar/5.jpg',
                'imageAlt': 'avatar',
                'icon': 'icon-cloud-download',
                'duration': '3:42'
            },
            {
                'id': 7,
                'title': 'We Won\'t Make It',
                'description': 'Lindsey Mcgowan',
                'image': 'assets/imgs/avatar/6.jpg',
                'imageAlt': 'avatar',
                'icon': 'icon-cloud-download',
                'duration': '3:42'
            },
            {
                'id': 8,
                'title': 'I Know I\'m Lonely',
                'description': 'Lucy Bender',
                'image': 'assets/imgs/avatar/7.jpg',
                'imageAlt': 'avatar',
                'icon': 'icon-cloud-download',
                'duration': '3:42'
            },
            {
                'id': 9,
                'title': 'Days For Forever',
                'description': 'Petra Brewer',
                'image': 'assets/imgs/avatar/1.jpg',
                'imageAlt': 'avatar',
                'icon': 'icon-cloud-download',
                'duration': '3:42'
            },
            {
                'id': 10,
                'title': 'Honey, Let Me Go',
                'description': 'Wendi Michael',
                'image': 'assets/imgs/avatar/2.jpg',
                'imageAlt': 'avatar',
                'icon': 'icon-cloud-download',
                'duration': '3:42'
            },
            {
                'id': 11,
                'title': 'Forgot His Heart',
                'description': 'Sherri Stokes',
                'image': 'assets/imgs/avatar/0.jpg',
                'imageAlt': 'avatar',
                'icon': 'icon-cloud-download',
                'duration': '3:42'
            },
            {
                'id': 12,
                'title': 'Plain Old Mind',
                'description': 'Bryan Conway',
                'image': 'assets/imgs/avatar/3.jpg',
                'imageAlt': 'avatar',
                'icon': 'icon-cloud-download',
                'duration': '3:42'
            }
        ]
      }
    }


  load(item: any): Observable<any> {
    const that = this;
    that.loadingService.show();
    if (AppSettings.IS_FIREBASE_ENABLED) {
      return new Observable(observer => {
        this.af
          .object('animation/' + item.theme)
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
