import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LineaComponent } from './linea.component';

describe('LineaComponent', () => {
  let component: LineaComponent;
  let fixture: ComponentFixture<LineaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
