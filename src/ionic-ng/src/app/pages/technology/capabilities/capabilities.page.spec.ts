import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FooterComponentModule } from '../../../components/page/footer/footer.module';

import { CapabilitiesPage } from './capabilities.page';

describe('CapabilitiesPage', () => {
  let component: CapabilitiesPage;
  let fixture: ComponentFixture<CapabilitiesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CapabilitiesPage ],
      imports: [IonicModule.forRoot(), FooterComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CapabilitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
