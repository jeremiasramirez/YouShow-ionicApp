import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FacemovieComponent } from './facemovie.component';

describe('FacemovieComponent', () => {
  let component: FacemovieComponent;
  let fixture: ComponentFixture<FacemovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacemovieComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FacemovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
