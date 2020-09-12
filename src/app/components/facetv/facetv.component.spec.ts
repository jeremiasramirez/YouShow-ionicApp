import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FacetvComponent } from './facetv.component';

describe('FacetvComponent', () => {
  let component: FacetvComponent;
  let fixture: ComponentFixture<FacetvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacetvComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FacetvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
