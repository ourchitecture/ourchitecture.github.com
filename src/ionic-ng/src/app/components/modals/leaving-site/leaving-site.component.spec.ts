import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IonicModule } from '@ionic/angular';

import { StubbedServiceTestModule } from '../../../services/stubbed.service.module.spec';

import { LeavingSiteComponent } from './leaving-site.component';

describe('LeavingSiteComponent', () => {
  let component: LeavingSiteComponent;
  let fixture: ComponentFixture<LeavingSiteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        CommonModule,
        IonicModule.forRoot(),
        StubbedServiceTestModule,
        LeavingSiteComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LeavingSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', async () => {
    expect(component).toBeTruthy();
  });
});
