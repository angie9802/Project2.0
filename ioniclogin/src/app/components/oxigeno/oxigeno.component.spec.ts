import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OxigenoComponent } from './oxigeno.component';

describe('OxigenoComponent', () => {
  let component: OxigenoComponent;
  let fixture: ComponentFixture<OxigenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OxigenoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OxigenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
