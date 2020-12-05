import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FislineComponent } from './fisline.component';

describe('FislineComponent', () => {
  let component: FislineComponent;
  let fixture: ComponentFixture<FislineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FislineComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FislineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
