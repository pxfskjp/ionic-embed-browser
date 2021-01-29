import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class ScrollSegmentService implements IService {

  constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

  getTitle = (): string => 'Scroll Segment';

  getAllThemes = (): Array<any> => {
    return [
      { 'url': 'scrollSegment/0', 'title': 'Scroll Segment Text Top', 'theme': 'layout1' },
      { 'url': 'scrollSegment/1', 'title': 'Scroll Segment Text Bottom', 'theme': 'layout2' },
      { 'url': 'scrollSegment/2', 'title': 'Scroll Segment Icon Top', 'theme': 'layout3' },
      { 'url': 'scrollSegment/3', 'title': 'Scroll Segment Icon With Text Bottom', 'theme': 'layout4' }
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
      "toolbarTitle": "Scroll Segment Text Top",
      "segmentHeader": [
        { "text": "Profile" },
        { "text": "New Offer" },
        { "text": "Best  Offer" }
      ],
      // Data Page 1
      "page1": {
        'image': 'assets/imgs/avatar/13.jpg',
        'title': 'Amanda Smith',
        'subtitle': 'Extreme coffee lover. Twitter maven. Internet practitioner. Beeraholic.',
        'followers': 'Followers',
        'valueFollowers': '439',
        'following': 'Following',
        'valueFollowing': '297',
        'posts': 'Posts',
        'valuePosts': '43',
        'buttonFollow': 'Follow',
        'buttonMessage': 'Message',
        'items': [
          {
            'id': 1,
            'subtitle': 'Shirt',
            'title': 'Black Shirt',
            'time': '22 August',
            'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          },
          {
            'id': 2,
            'subtitle': 'Shirt',
            'title': 'White Shirt',
            'time': '19 August',
            'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          },
          {
            'id': 3,
            'subtitle': 'Shirt',
            'title': 'White T Shirt',
            'time': '12 August',
            'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          },
          {
            'id': 4,
            'subtitle': 'Shirt',
            'title': 'Black t Shirt',
            'time': '10 August',
            'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          },
          {
            'id': 5,
            'subtitle': 'Shirt',
            'title': 'Black Shirt',
            'time': '5 August',
            'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          },
        ]
      },

      // Data Page 2
      "page2": {
        "items": [
          {
            "id": 1,
            "title": "Ellie Waterman",
            "description": "Lorem ipsum dolor sit amet",
            "image": "assets/imgs/avatar/1.jpg",
            "price": "$99.99"
          },
          {
            "id": 2,
            "title": "Delice Haight",
            "description": "Lorem ipsum dolor sit amet",
            "image": "assets/imgs/avatar/2.jpg",
            "price": "$139.99"
          },
          {
            "id": 3,
            "title": "Cyrilla Killam",
            "description": "Lorem ipsum dolor sit amet",
            "image": "assets/imgs/avatar/3.jpg",
            "price": "$149.99"
          },
          {
            "id": 4,
            "title": "Edwyn Merchant",
            "description": "Lorem ipsum dolor sit amet",
            "image": "assets/imgs/avatar/4.jpg",
            "price": "$19.99"
          },
          {
            "id": 5,
            "title": "Biddy Norwood",
            "description": "Lorem ipsum dolor sit amet",
            "image": "assets/imgs/avatar/5.jpg",
            "price": "$199.99"
          }
        ]
      },
      // Data Page 3
      "page3": {
        "items": [
          {
            "id": 1,
            "title": "Ora Treloar",
            "description": "Lorem ipsum dolor sit amet",
            "image": "assets/imgs/avatar/7.jpg",
            "price": "$99.99",
            "button": "Buy"
          },
          {
            "id": 2,
            "title": "Warren Mathers",
            "description": "Lorem ipsum dolor sit amet",
            "image": "assets/imgs/avatar/8.jpg",
            "price": "$139.99",
            "button": "Buy"
          },
          {
            "id": 3,
            "title": "Kandi Headley",
            "description": "Lorem ipsum dolor sit amet",
            "image": "assets/imgs/avatar/9.jpg",
            "price": "$149.99",
            "button": "Buy"
          },
          {
            "id": 4,
            "title": "Amanda Smith",
            "description": "Lorem ipsum dolor sit amet",
            "image": "assets/imgs/avatar/10.jpg",
            "price": "$19.99",
            "button": "Buy"
          },
          {
            "id": 5,
            "title": "Kandi Smith",
            "description": "Lorem ipsum dolor sit amet",
            "image": "assets/imgs/avatar/11.jpg",
            "price": "$199.99",
            "button": "Buy"
          }
        ]
      }
    };
  }

  //* Data Set for page 2
  getDataForLayout2 = (): any => {
    return {
      'toolbarTitle': 'Scroll Segment Text Bottom',
      "segmentHeader": [
        { "text": "Profile" },
        { "text": "European Travel" },
        { "text": "Asian Travel" }
      ],

      // Data Page 1
      "page1": {
        'image': 'assets/imgs/avatar/21.jpg',
        'title': 'Carolyn Guerrero',
        'subtitle': 'From New York',
        'description': 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        'button': 'Follow',
        'icon': "chatbubble-ellipses",
        'followers': 'Followers',
        'valueFollowers': '439',
        'following': 'Following',
        'valueFollowing': '297',
        'posts': 'Posts',
        'valuePosts': '43',
        'items': [
          {
            'id': 1,
            'category': 'The World’s Best Cities',
            'backgroundCard': 'assets/imgs/background/14.jpg',
            'title': 'London, England',
          },
          {
            'id': 2,
            'category': 'The World’s Best Cities',
            'backgroundCard': 'assets/imgs/background/3.jpg',
            'title': 'New York City, United States',
          },
          {
            'id': 3,
            'category': 'The World’s Best Cities',
            'backgroundCard': 'assets/imgs/background/14.jpg',
            'title': 'Paris, France',
          }
        ]
      },
      // Data Page 2
      "page2": {
        'items': [
          {
            'id': 1,
            'title': 'Athens, Greece',
            'subtitle': 'Trendier than ever, Athens is a city in constant evolution ...',
            'price': '$ 340',
            'image': 'assets/imgs/background/23.jpg',
          },
          {
            'id': 2,
            'title': 'Tbilisi, Georgia',
            'subtitle': 'The Capital of Georgia is more trendy than ever in 2020; it ...',
            'price': '$ 200',
            'image': 'assets/imgs/background/21.jpg',
          },
          {
            'id': 3,
            'title': 'Vienna, Austria',
            'subtitle': 'Vienna is, with Paris, Rome, Bruges and Prague, one of the ...',
            'price': '$ 500',
            'image': 'assets/imgs/background/22.jpg',
          },
          {
            'id': 4,
            'title': 'Cascais, Portugal',
            'subtitle': 'Cascais is truly one of the best destinations in Europe. It ...',
            'price': '$ 100',
            'image': 'assets/imgs/background/14.jpg',
          },
          {
            'id': 5,
            'title': 'Sibiu, Romania',
            'subtitle': 'Still wondering which will be the next trendy destination this ...',
            'price': '$ 600',
            'image': 'assets/imgs/background/9.jpg',
          },
        ]
      },

      // Data Page 3
      "page3": {
        'items': [
          {
            'id': 1,
            'title': 'Moscow, Russia',
            'subtitle': 'In the past year, China capital has seen the opening of ...',
            'image': 'assets/imgs/background/3.jpg',
          },
          {
            'id': 2,
            'title': 'Kuala Lumpur, Malaysia',
            'subtitle': 'Chic boutique hotels as well as Four Seasons and the ...',
            'image': 'assets/imgs/background/21.jpg',
          },
          {
            'id': 3,
            'title': 'Kyoto, Japan',
            'subtitle': 'As visits to Kyoto continue to climb, a trend that will ...',
            'image': 'assets/imgs/background/13.jpg',
          },
          {
            'id': 4,
            'title': 'Singapore',
            'subtitle': 'In 2019, Singapore iconic Raffles Hotel reopened after ...',
            'image': 'assets/imgs/background/29.jpg',
          },
          {
            'id': 5,
            'title': 'Songyang County, China',
            'subtitle': 'Rural Songyang County in China eastern Zhejiang province ...',
            'image': 'assets/imgs/background/22.jpg',
          },
        ]
      }
    };
  }

  //* Data Set for page 3
  getDataForLayout3 = (): any => {
    return {
      'toolbarTitle': 'Scroll Segment Icon Top',
      "segmentHeader": [
        { "icon": "heart" },
        { "icon": "chatbox" },
        { "icon": "reader" },
      ],
      // Data Page 1
      "page1": {
        'items': [
          {
            'id': 1,
            'title': 'Barcelona, Spain',
            'price': '$ 20 per month',
            'available': 'Available Now',
            'image': 'assets/imgs/background/23.jpg',
            "iconsStars": [
              {
                "icon": "star",
              },
              {
                "icon": "star"
              },
              {
                "icon": "star"
              },
              {
                "icon": "star"
              },
              {
                "icon": "star-outline"
              }
            ],
          },
          {
            'id': 2,
            'title': 'Los Angeles, United States',
            'price': '$ 700 per month',
            'available': 'Available Now',
            'image': 'assets/imgs/background/21.jpg',
            "iconsStars": [
              {
                "icon": "star",
              },
              {
                "icon": "star"
              },
              {
                "icon": "star"
              },
              {
                "icon": "star"
              },
              {
                "icon": "star-outline"
              }
            ],
          },
          {
            'id': 3,
            'title': 'Rome, Italy',
            'price': '$ 300 per month',
            'available': 'Available Now',
            'image': 'assets/imgs/background/14.jpg',
            "iconsStars": [
              {
                "icon": "star",
              },
              {
                "icon": "star"
              },
              {
                "icon": "star"
              },
              {
                "icon": "star"
              },
              {
                "icon": "star-outline"
              }
            ],
          },
          {
            'id': 4,
            'title': 'Madrid, Spain',
            'price': '$ 500 per month',
            'available': 'Available Now',
            'image': 'assets/imgs/background/13.jpg',
            "iconsStars": [
              {
                "icon": "star",
              },
              {
                "icon": "star"
              },
              {
                "icon": "star"
              },
              {
                "icon": "star"
              },
              {
                "icon": "star-outline"
              }
            ],
          },
        ]
      },

      // Data Page 2
      "page2": {
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
      },
      // Data Page 3
      "page3": {
        "rating": "4.5",
        "iconsStars": [
          {
            "iconStar": "star",
          },
          {
            "iconStar": "star",
          },
          {
            "iconStar": "star",
          },
          {
            "iconStar": "star",
          },
          {
            "iconStar": "star-outline",
          }
        ],
        "items": [
          {
            "id": 1,
            "title": "Erica Romaguera",
            "time": "18 August 2018",
            "description": "If you could have any kind of pet, what would you choose?",
            "iconsStars": [
              {
                "iconStar": "star",
              },
              {
                "iconStar": "star",
              },
              {
                "iconStar": "star",
              },
              {
                "iconStar": "star-outline",
              },
              {
                "iconStar": "star-outline",
              }
            ],
          },
          {
            "id": 2,
            "title": "Caleigh Jerde",
            "time": "18 August 2018",
            "description": "If you could learn any language, what would you choose?",
            "iconsStars": [
              {
                "iconStar": "star",
              },
              {
                "iconStar": "star",
              },
              {
                "iconStar": "star-outline",
              },
              {
                "iconStar": "star-outline",
              },
              {
                "iconStar": "star-outline",
              }
            ],
          },
          {
            "id": 3,
            "title": "Lucas Schultz",
            "time": "18 August 2018",
            "description": "Life is about making an impact, not making an income.",
            "iconsStars": [
              {
                "iconStar": "star",
              },
              {
                "iconStar": "star",
              },
              {
                "iconStar": "star",
              },
              {
                "iconStar": "star",
              },
              {
                "iconStar": "star-outline",
              }
            ],
          },
          {
            "id": 4,
            "title": "Carole Marvin",
            "time": "18 August 2018",
            "description": "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel",
            "iconsStars": [
              {
                "iconStar": "star",
              },
              {
                "iconStar": "star",
              },
              {
                "iconStar": "star",
              },
              {
                "iconStar": "star",
              },
              {
                "iconStar": "star",
              }
            ],
          },
          {
            "id": 5,
            "title": "Doriana Feeney",
            "time": "18 August 2018",
            "description": "Definiteness of purpose is the starting point of all achievement.",
            "iconsStars": [
              {
                "iconStar": "star",
              },
              {
                "iconStar": "star",
              },
              {
                "iconStar": "star",
              },
              {
                "iconStar": "star",
              },
              {
                "iconStar": "star-outline",
              }
            ],
          },
          {
            "id": 6,
            "title": "Nia Gutkowski",
            "time": "18 August 2018",
            "description": "Life is what happens to you while you’re busy making other plans",
            "iconsStars": [
              {
                "iconStar": "star",
              },
              {
                "iconStar": "star",
              },
              {
                "iconStar": "star",
              },
              {
                "iconStar": "star",
              },
              {
                "iconStar": "star-outline",
              }
            ],
          }
        ]
      },
    };
  }

  //* Data Set for page 4
  getDataForLayout4 = (): any => {
    return {
      'toolbarTitle': 'Scroll Segment Icon With Text Bottom',
      "segmentHeader": [
        { "text": "Profile", "icon": "person-circle" },
        { "text": "Commnets", "icon": "chatbox-ellipses" },
        { "text": "Review", "icon": "reader" }
      ],
      // Data Page 1
      "page1": {
        'toolbarTitle': 'Profile With Big Avatar',
        'image': 'assets/imgs/avatar/24.jpg',
        'title': 'Claire Stewart',
        'subtitle': 'Extreme coffee lover. Twitter maven. Internet practitioner. Beeraholic.',
        'buttonFollow': 'Follow',
        'buttonMessage': 'Message',
        'category': 'Favorite',
        'image1': 'assets/imgs/background/21.jpg',
        'image2': 'assets/imgs/background/3.jpg',
        'image3': 'assets/imgs/background/29.jpg',
      },

      // Data Page 2
      "page2": {
        'allComments': '2121 Comments',
        'items': [
          {
            'id': 1,
            'image': 'assets/imgs/avatar/17.jpg',
            'title': 'Erica Romaguera',
            'time': '18 August',
            'description': 'If you could have any kind of pet, what would you choose?',
            'buttonLike': '743',
            'buttonDislike': '33',
            'iconLike': 'thumbs-up',
            'iconDislike': 'thumbs-down',
            "iconsStars": [
              {
                "icon": "star",
              },
              {
                "icon": "star"
              },
              {
                "icon": "star"
              },
              {
                "icon": "star"
              },
              {
                "icon": "star-outline"
              }
            ],
          },
          {
            'id': 2,
            'image': 'assets/imgs/avatar/18.jpg',
            'title': 'Caleigh Jerde',
            'time': '18 August',
            'description': 'If you could learn any language, what would you choose?',
            'buttonLike': '743',
            'buttonDislike': '33',
            'iconLike': 'thumbs-up',
            'iconDislike': 'thumbs-down',
            "iconsStars": [
              {
                "icon": "star",
              },
              {
                "icon": "star"
              },
              {
                "icon": "star"
              },
              {
                "icon": "star-outline"
              },
              {
                "icon": "star-outline"
              }
            ],
          },
          {
            'id': 3,
            'image': 'assets/imgs/avatar/19.jpg',
            'title': 'Lucas Schultz',
            'time': '18 August',
            'description': 'Life is about making an impact, not making an income.',
            'buttonLike': '743',
            'buttonDislike': '33',
            'iconLike': 'thumbs-up',
            'iconDislike': 'thumbs-down',
            "iconsStars": [
              {
                "icon": "star",
              },
              {
                "icon": "star"
              },
              {
                "icon": "star"
              },
              {
                "icon": "star"
              },
              {
                "icon": "star-outline"
              }
            ],
          },
          {
            'id': 4,
            'image': 'assets/imgs/avatar/20.jpg',
            'title': 'Carole Marvin',
            'time': '18 August',
            'description': `I\’ve learned that people will forget what you said,
                     people will forget what you did, but people will never forget how you made them feel`,
            'buttonLike': '743',
            'buttonDislike': '33',
            'iconLike': 'thumbs-up',
            'iconDislike': 'thumbs-down',
            "iconsStars": [
              {
                "icon": "star",
              },
              {
                "icon": "star"
              },
              {
                "icon": "star"
              },
              {
                "icon": "star-outline"
              },
              {
                "icon": "star-outline"
              }
            ],
          },
          {
            'id': 5,
            'image': 'assets/imgs/avatar/21.jpg',
            'title': 'Doriana Feeney',
            'time': '18 August',
            'description': 'Definiteness of purpose is the starting point of all achievement.',
            'buttonLike': '743',
            'buttonDislike': '33',
            'iconLike': 'thumbs-up',
            'iconDislike': 'thumbs-down',
            "iconsStars": [
              {
                "icon": "star",
              },
              {
                "icon": "star"
              },
              {
                "icon": "star"
              },
              {
                "icon": "star"
              },
              {
                "icon": "star-outline"
              }
            ],
          },
          {
            'id': 6,
            'image': 'assets/imgs/avatar/22.jpg',
            'title': 'Nia Gutkowski',
            'time': '18 August',
            'description': 'Life is what happens to you while you’re busy making other plans',
            'buttonLike': '743',
            'buttonDislike': '33',
            'iconLike': 'thumbs-up',
            'iconDislike': 'thumbs-down',
            "iconsStars": [
              {
                "icon": "star",
              },
              {
                "icon": "star"
              },
              {
                "icon": "star-outline"
              },
              {
                "icon": "star-outline"
              },
              {
                "icon": "star-outline"
              }
            ],
          }
        ]
      },
      // Data Page 3
      "page3": {
        "rating": "4.5",
        "iconsStars": [
          {
            "iconStar": "star",
          },
          {
            "iconStar": "star",
          },
          {
            "iconStar": "star",
          },
          {
            "iconStar": "star",
          },
          {
            "iconStar": "star-outline",
          }
        ],
        "items": [
          {
            "id": 1,
            "title": "Erica Romaguera",
            "time": "18 August 2018",
            "description": "If you could have any kind of pet, what would you choose?",
            "iconsStars": [
              {
                "iconStar": "star",
              },
              {
                "iconStar": "star",
              },
              {
                "iconStar": "star",
              },
              {
                "iconStar": "star-outline",
              },
              {
                "iconStar": "star-outline",
              }
            ],
          },
          {
            "id": 2,
            "title": "Caleigh Jerde",
            "time": "18 August 2018",
            "description": "If you could learn any language, what would you choose?",
            "iconsStars": [
              {
                "iconStar": "star",
              },
              {
                "iconStar": "star",
              },
              {
                "iconStar": "star-outline",
              },
              {
                "iconStar": "star-outline",
              },
              {
                "iconStar": "star-outline",
              }
            ],
          },
          {
            "id": 3,
            "title": "Lucas Schultz",
            "time": "18 August 2018",
            "description": "Life is about making an impact, not making an income.",
            "iconsStars": [
              {
                "iconStar": "star",
              },
              {
                "iconStar": "star",
              },
              {
                "iconStar": "star",
              },
              {
                "iconStar": "star",
              },
              {
                "iconStar": "star-outline",
              }
            ],
          },
          {
            "id": 4,
            "title": "Carole Marvin",
            "time": "18 August 2018",
            "description": "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel",
            "iconsStars": [
              {
                "iconStar": "star",
              },
              {
                "iconStar": "star",
              },
              {
                "iconStar": "star",
              },
              {
                "iconStar": "star",
              },
              {
                "iconStar": "star",
              }
            ],
          },
          {
            "id": 5,
            "title": "Doriana Feeney",
            "time": "18 August 2018",
            "description": "Definiteness of purpose is the starting point of all achievement.",
            "iconsStars": [
              {
                "iconStar": "star",
              },
              {
                "iconStar": "star",
              },
              {
                "iconStar": "star",
              },
              {
                "iconStar": "star",
              },
              {
                "iconStar": "star-outline",
              }
            ],
          },
          {
            "id": 6,
            "title": "Nia Gutkowski",
            "time": "18 August 2018",
            "description": "Life is what happens to you while you’re busy making other plans",
            "iconsStars": [
              {
                "iconStar": "star",
              },
              {
                "iconStar": "star",
              },
              {
                "iconStar": "star",
              },
              {
                "iconStar": "star",
              },
              {
                "iconStar": "star-outline",
              }
            ],
          }
        ]
      },
    };
  }

  load(item: any): Observable<any> {
    this.loadingService.show();
    if (AppSettings.IS_FIREBASE_ENABLED) {
      return new Observable(observer => {
        this.af
          .object('scrollSegment/' + item.theme)
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
