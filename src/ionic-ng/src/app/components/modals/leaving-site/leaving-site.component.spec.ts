import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IonicModule } from '@ionic/angular';

import { LeavingSiteComponent } from './leaving-site.component';

describe('LeavingSiteComponent', () => {
  let component: LeavingSiteComponent;
  let fixture: ComponentFixture<LeavingSiteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [IonicModule.forRoot(), LeavingSiteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeavingSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
