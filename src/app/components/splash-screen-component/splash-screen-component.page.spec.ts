import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SplashScreenComponentPage } from './splash-screen-component.page';

describe('SplashScreenComponentPage', () => {
  let component: SplashScreenComponentPage;
  let fixture: ComponentFixture<SplashScreenComponentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplashScreenComponentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SplashScreenComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
