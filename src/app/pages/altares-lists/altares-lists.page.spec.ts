import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AltaresListsPage } from './altares-lists.page';

describe('AltaresListsPage', () => {
  let component: AltaresListsPage;
  let fixture: ComponentFixture<AltaresListsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaresListsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AltaresListsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
