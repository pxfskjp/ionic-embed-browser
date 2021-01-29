import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HomeComponentPage } from './home-component.page';

describe('HomeComponentPage', () => {
  let component: HomeComponentPage;
  let fixture: ComponentFixture<HomeComponentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
