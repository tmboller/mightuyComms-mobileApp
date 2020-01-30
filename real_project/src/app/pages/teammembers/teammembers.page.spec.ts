import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeammembersPage } from './teammembers.page';

describe('TeammembersPage', () => {
  let component: TeammembersPage;
  let fixture: ComponentFixture<TeammembersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeammembersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeammembersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
