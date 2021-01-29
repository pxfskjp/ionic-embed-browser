import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoreEventsPage } from './more-events.page';

describe('MoreEventsPage', () => {
  let component: MoreEventsPage;
  let fixture: ComponentFixture<MoreEventsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreEventsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoreEventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
