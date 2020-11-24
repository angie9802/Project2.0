import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Calendar1Page } from './calendar1.page';

describe('Calendar1Page', () => {
  let component: Calendar1Page;
  let fixture: ComponentFixture<Calendar1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Calendar1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Calendar1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
