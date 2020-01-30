import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToolreportPage } from './toolreport.page';

describe('ToolreportPage', () => {
  let component: ToolreportPage;
  let fixture: ComponentFixture<ToolreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToolreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
