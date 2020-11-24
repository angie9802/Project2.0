import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComunicacionApiPage } from './comunicacion-api.page';

describe('ComunicacionApiPage', () => {
  let component: ComunicacionApiPage;
  let fixture: ComponentFixture<ComunicacionApiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunicacionApiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComunicacionApiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
