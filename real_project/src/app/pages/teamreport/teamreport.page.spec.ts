import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeamreportPage } from './teamreport.page';

describe('TeamreportPage', () => {
  let component: TeamreportPage;
  let fixture: ComponentFixture<TeamreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeamreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
