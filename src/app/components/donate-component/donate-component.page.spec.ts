import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { DonateComponentPage } from './donate-component.page';

describe('DonateComponentPage', () => {
  let component: DonateComponentPage;
  let fixture: ComponentFixture<DonateComponentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonateComponentPage ],
      imports: [IonicModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(DonateComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
