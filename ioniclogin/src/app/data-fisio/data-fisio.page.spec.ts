import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DataFisioPage } from './data-fisio.page';

describe('DataFisioPage', () => {
  let component: DataFisioPage;
  let fixture: ComponentFixture<DataFisioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataFisioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DataFisioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
